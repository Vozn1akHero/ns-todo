import { Injectable, OnDestroy } from "@angular/core";
import { SubscriptionManager } from "@app/helpers/subscription-manager";
import { BluetoothDevice } from "@app/model/bluetooth-device.model";
import { BehaviorSubject, Observable } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";
//import bluetooth = require("nativescript-bluetooth");
const bluetooth = require("nativescript-bluetooth");

@Injectable({ providedIn: "root" })
export class BluetoothProvider implements OnDestroy {
    private _devices: BehaviorSubject<BluetoothDevice[]> = new BehaviorSubject(
        []
    );
    private _enabled: BehaviorSubject<boolean> = new BehaviorSubject(false);

    public get foundDevices$() {
        return this._devices.asObservable();
    }
    public get enabled$() {
        return this._enabled.asObservable();
    }

    private listenToBluetoothEnabled(): Observable<boolean> {
        return new Observable((observer) => {
            bluetooth
                .isBluetoothEnabled()
                .then((enabled) => observer.next(enabled));

            let intervalHandle = setInterval(() => {
                bluetooth
                    .isBluetoothEnabled()
                    .then((enabled) => observer.next(enabled));
            }, 1000);

            return () => clearInterval(intervalHandle);
        }).pipe(distinctUntilChanged()) as Observable<boolean>;
    }

    private enable() {
        this.subscriptionManager.add(
            this.listenToBluetoothEnabled().subscribe((enabled) => {
                if (enabled) {
                    bluetooth.hasCoarseLocationPermission().then((granted) => {
                        if (!granted) {
                            bluetooth.requestCoarseLocationPermission();
                        } else {
                            this.scan();
                        }
                    });
                    this._enabled.next(true);
                }
            })
        );
    }

    private scan() {
        this._devices.next([]);

        bluetooth.startScanning({
            seconds: 3,
            onDiscovered: (peripheral) => {
                if (peripheral.name) {
                    console.log(
                        `UUID: ${peripheral.UUID} name: ${peripheral.name}`
                    );
                    this._devices.next([
                        ...this._devices.getValue(),
                        new BluetoothDevice(peripheral.name, peripheral.UUID),
                    ]);
                }
            },
        });
    }

    connect(UUID: string) {
        bluetooth.connect({
            UUID: UUID,
            onConnected: (peripheral) => {
                alert("Connected");
                //here you can navigate to the controller view
            },
            onDisconnected: (peripheral) => {
                alert("Device Disconnected");
                //here you can navigate to the scan view
            },
        });
    }

    constructor(private subscriptionManager: SubscriptionManager) {
        this.enable();
    }

    ngOnDestroy(): void {
        this.subscriptionManager.destroy();
    }
}
