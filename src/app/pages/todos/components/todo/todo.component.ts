import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: "ns-todo",
    templateUrl: "./todo.component.html",
    styleUrls: ["./todo.component.scss"],
})
export class TodoComponent {
    @Output() EERemoveToDoById: EventEmitter<number> = new EventEmitter();
    @Output() EEChangeTodoStatusById: EventEmitter<{
        id: number;
        value: boolean;
    }> = new EventEmitter();
    @Output() EETitleUpdate = new EventEmitter();
    @Output() EEDateUpdate = new EventEmitter();

    @Input() id: number;
    @Input() title: string;
    @Input() date: Date;
    @Input() done: boolean;

    formGroup: FormGroup = new FormGroup({
        title: new FormControl(this.title, Validators.required),
        date: new FormControl(this.date, Validators.required),
    });

    changeTodoStatusOff() {
        this.EEChangeTodoStatusById.emit({ id: this.id, value: !this.done });
    }
    removeTodo() {
        this.EERemoveToDoById.emit(this.id);
    }
    updateTitle() {
        const title = this.formGroup.get("title").value;
        this.EETitleUpdate.emit({ id: this.id, value: title });
    }
    updateDate() {
        const date = this.formGroup.get("date").value;
        this.EEDateUpdate.emit({ id: this.id, value: date });
    }
}
