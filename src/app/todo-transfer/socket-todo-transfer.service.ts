import { Todo } from "@app/model/todo.model";
import { take } from "rxjs/operators";
import { TodoStore } from "./../store/todo-store";
import { Injectable, OnDestroy } from "@angular/core";
import {
    UdpServer,
    TcpClient,
    TcpServer,
} from "nativescript-simple-networking";
import { Address4 } from "ip-address";

@Injectable({ providedIn: "root" })
export class SocketTodoTransferService implements OnDestroy {
    tcpServer = new TcpServer(2);
    udpServer = new UdpServer();
    tcpClient = new TcpClient();

    constructor(private todoStore: TodoStore) {
        this.tcpServer.start(44444);
    }

    ngOnDestroy(): void {
        this.udpServer.stop();
        this.tcpServer.stop();
        this.tcpClient.stop();
    }

    tcpTransfer(client: Address4) {
        this.sendTodos(client);
    }

    udpTransferListening() {
        this.udpServer.onPacket = (sender: Address4, message: string) => {
            console.log("Message from UDP: ", message);
        };
        this.udpServer.onError = (id: number, message: string) => {
            console.log("UDP error for action #", id, ": ", message);
        };
        this.udpServer.onFinished = (id: number) => {
            console.log("UDP finished action #", id);
        };

        // Start listening on port 33333
        var udpConnectEvent: number = this.udpServer.start(33333);
        console.log("UDP start event is: ", udpConnectEvent);
        // Broadcast a message
        var udpBroadcastEvent: number = this.udpServer.send(
            "255.255.255.255",
            "I am alive!"
        );
        console.log("UDP broadcast event is: ", udpBroadcastEvent);
    }

    tcpTransferListening() {
        // Start a TCP server listening on port 44444 with maximum 2 clients
        this.tcpServer.onClient = (client: Address4) => {
            console.log("New TCP client: ", client.adddress);
            this.tcpServer.send(client, "Welcome!");
        };
        this.tcpServer.onData = (client: Address4, data: string) => {
            console.log("New data from client ", client.address, ": ", data);
        };
        this.tcpServer.onError = (
            id: number,
            client: Address4,
            message: string
        ) => {
            if (client)
                console.log(
                    "TCP server client error",
                    client.address,
                    ": ",
                    message
                );
            else console.log("TCP server error: ", message);
        };
        this.tcpServer.onFinished = (id: number) => {
            console.log("TCP server finished transaction #", id);
        };
    }

    connectToTcpServ() {
        // Connect to the TCP server
        this.tcpClient.onData = (data: string) => {
            console.log("Data from TCP client: ", data);
        };
        this.tcpClient.onError = (id: number, message: string) => {
            console.log("TCP client error for action #", id, ": ", message);
        };
        this.tcpClient.onFinished = (id: number) => {
            console.log("TCP client finished action #: ", id);
        };

        // Connect client, action IDs are ommited in this example - see UdpServer
        this.tcpClient.start("localhost", 44444);
        this.tcpClient.send("I am also alive!");
    }

    private sendTodos(client: Address4) {
        this.todoStore
            .getAll()
            .pipe(take(1))
            .subscribe((val: Array<Todo>) => {
                const allTodos: string = val
                    .map((todo: Todo, index) => {
                        return Object.values(todo).join(",");
                    })
                    .join("\n");
                this.tcpServer.send(client, allTodos);
            });
    }
}
