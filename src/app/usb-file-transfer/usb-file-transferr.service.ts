import { TodoStore } from "@app/store/todo-store";
import { isAndroid } from "tns-core-modules/platform";
import { Injectable } from "@angular/core";
import { knownFolders, Folder, File, path } from "tns-core-modules/file-system";
import { take } from "rxjs/operators";
import Todo from "@app/model/todo.model";

declare let jmtp: any;

@Injectable({ providedIn: "root" })
export class UsbFileTransferService {
    private _todosFilePath: string = "///todos.txt";
    private _filePath: string = path.normalize(
        knownFolders.temp + this._todosFilePath
    );

    constructor(private todoStore: TodoStore) {}

    // manageConnection() {
    //     if (isAndroid) {
    //         let targetFolder = null;
    //         let manager = new PortableDeviceManager();
    //         let device = manager.getDevices()[0];
    //         // Connect to USB device
    //         device.open();
    //         //System.out.println(device.getModel());

    //         //System.out.println("---------------");

    //         // Iterate over deviceObjects  : PortableDeviceObject
    //         for (let object of device.getRootObjects().toArray()) {
    //             // If the object is a storage object
    //             if (object instanceof PortableDeviceStorageObject) {
    //                 let storage = <PortableDeviceStorageObject>object;

    //                 storage
    //                     .getChildObjects()
    //                     .toArray()
    //                     .forEach((o2: PortableDeviceObject) => {
    //                         if (
    //                             o2.getOriginalFileName().toString() ===
    //                             "testFolder"
    //                         ) {
    //                             targetFolder = <PortableDeviceFolderObject>o2;
    //                         }

    //                         console.log(o2.getOriginalFileName());
    //                     });

    //                 //copyFileFromComputerToDeviceFolder(targetFolder);
    //                 let folderFiles: PortableDeviceObject[] = targetFolder
    //                     .getChildObjects()
    //                     .toArray();
    //                 folderFiles.forEach((pDO: PortableDeviceObject) => {
    //                     this.copyFileFromDeviceToComputerFolder(pDO, device);
    //                 });
    //             }
    //         }

    //         manager.getDevices()[0].close();
    //     }
    // }

    // private copyFileFromDeviceToComputerFolder(
    //     pDO: PortableDeviceObject,
    //     device: PortableDevice
    // ): void {
    //     const copy = new PortableDeviceToHostImpl32();
    //     try {
    //         copy.copyFromPortableDeviceToHost(
    //             pDO.getID(),
    //             "C:\\TransferTest",
    //             device
    //         );
    //     } catch (ex) {
    //         console.log(ex);
    //     }
    // }

    private saveTodoListToFileAnd(): File {
        const file = File.fromPath(this._filePath);
        this.todoStore
            .getAll()
            .pipe(take(1))
            .subscribe((val: Array<Todo>) => {
                const allTodos: string = val
                    .map((todo: Todo, index) => {
                        return Object.values(todo).join(",");
                    })
                    .join("\n");
                file.writeText(allTodos)
                    .then((result) => {
                        file.readText().then((res) => {
                            console.log(`File content:  ${res}`);
                        });
                    })
                    .catch((err) => {
                        console.log(err.stack);
                    });
            });
        return file;
    }
}
