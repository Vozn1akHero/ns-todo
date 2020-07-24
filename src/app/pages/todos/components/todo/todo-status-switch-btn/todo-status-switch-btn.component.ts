import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import CustomButtonBase from "@app/common/controls/button/custom-button-base";

@Component({
    selector: "ns-todo-status-switch-btn",
    templateUrl: "./todo-status-switch-btn.component.html",
    styleUrls: ["./todo-status-switch-btn.component.scss"],
})
export class TodoCheckOffBtnComponent extends CustomButtonBase {
    //@Input() id: number;
    @Input() done: boolean;
    //@Input() styles: any;

    @Output() EEChangeStatus: EventEmitter<void> = new EventEmitter();

    constructor() {
        super();
    }

    changeStatusOff() {
        this.EEChangeStatus.emit();
    }
}
