import {
    Component,
    OnInit,
    Input,
    EventEmitter,
    Output,
    ChangeDetectionStrategy,
} from "@angular/core";

@Component({
    selector: "ns-bluetooth-modal-item",
    template: `<FlexboxLayout>
        <TextView editable="false" [text]="name"></TextView>
    </FlexboxLayout>`,
    styles: [
        `
            FlexboxLayout {
                align-items: flex-start;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BluetoothModalItemComponent {
    @Input() name: string;
    @Input() UUID: string;

    @Output() EEConnect: EventEmitter<string> = new EventEmitter();

    connect = () => this.EEConnect.emit(this.UUID);
}
