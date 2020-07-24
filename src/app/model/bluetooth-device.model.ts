export class BluetoothDevice {
    name: string;
    UUID: string;

    constructor(name: string, UUID: string) {
        this.name = name;
        this.UUID = UUID;
    }
}
