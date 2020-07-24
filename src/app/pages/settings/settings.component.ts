import { UsbFileTransferService } from "./../../usb-file-transfer/usb-file-transferr.service";
import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";

@Component({
    selector: "ns-settings",
    templateUrl: "./settings.component.html",
    styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent implements OnInit {
    constructor(
        private routerExtensions: RouterExtensions,
        private usbFileTransferService: UsbFileTransferService
    ) {}

    ngOnInit(): void {}

    transferWithUsb() {
        //this.usbFileTransferService.manageConnection();
    }
    goBack(): void {
        this.routerExtensions.backToPreviousPage();
    }
}
