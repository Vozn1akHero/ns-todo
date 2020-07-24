import CustomButtonBase from "@app/common/controls/button/custom-button-base";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "ns-img-bg-btn",
    templateUrl: "./img-bg-btn.component.html",
    styleUrls: ["./img-bg-btn.component.scss"],
})
export class ImgBgBtnComponent extends CustomButtonBase {
    @Input() bgPath: string;
    @Output() EEOnTap: EventEmitter<void> = new EventEmitter();

    onTap(): void {
        this.EEOnTap.emit();
    }
}
