import { Component, OnInit } from "@angular/core";
import { BluetoothProvider } from "@app/bluetooth/bluetooth-provider";
import { ModalService } from "@app/common/services/modal.service";
import { BluetoothDevice } from "@app/model/bluetooth-device.model";
import { Observable } from "rxjs";

@Component({
    selector: "ns-bluetooth-modal",
    templateUrl: "./bluetooth-modal.component.html",
    styleUrls: ["./bluetooth-modal.component.scss"],
})
export class BluetoothModalComponent implements OnInit {
    foundDevices$: Observable<BluetoothDevice[]>;
    enabled$: Observable<boolean>;

    constructor(private bluetoothProvider: BluetoothProvider) {
        this.foundDevices$ = this.bluetoothProvider.foundDevices$;
        this.enabled$ = this.bluetoothProvider.enabled$;
    }

    connect(uuid: string) {
        this.bluetoothProvider.connect(uuid);
    }

    ngOnInit(): void {}
}
