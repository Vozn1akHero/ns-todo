import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TodoStore } from "@app/store/todo-store";
import { RouterExtensions } from "@nativescript/angular";

@Component({
    selector: "ns-todo-creation",
    templateUrl: "todo-creation.component.html",
})
export class TodoCreationComponent implements OnInit {
    title: string;
    newTodoForm: FormGroup = new FormGroup({
        title: new FormControl("", Validators.required),
        date: new FormControl("", Validators.required),
    });

    goBack(): void {
        this.routerExtensions.backToPreviousPage();
    }

    constructor(
        private routerExtensions: RouterExtensions,
        private todoStore: TodoStore
    ) {}

    ngOnInit() {}

    submitNewTodo() {
        const { title, date } = this.newTodoForm.value;
        this.todoStore.create(title, date);
    }
}
