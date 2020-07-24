import { Component, OnInit } from "@angular/core";
import { TodoService } from "./services/todo.service";
import { TodoStore } from "@app/store/todo-store";
import Todo from "../../model/todo.model";
import { Observable } from "rxjs";
import { RouterExtensions } from "@nativescript/angular";

@Component({
    selector: "ns-todos",
    templateUrl: "./todos.component.html",
    styleUrls: ["./todos.component.scss"],
})
export class TodosComponent {
    todos$: Observable<Array<Todo>> = this.todoStore.getAll();

    constructor(
        private todoStore: TodoStore,
        private routerExtensions: RouterExtensions
    ) {}

    goBack(): void {
        this.routerExtensions.backToPreviousPage();
    }

    deleteTodoById(id: number): void {
        const res = this.todoStore.deleteById(id);
    }

    changeTodoStatusById(obj: { id: number; value: boolean }): void {
        const res = this.todoStore.changeStatusById(obj.id, obj.value);
    }

    editTodoById(id: number): void {
        this.routerExtensions.navigate(["/edit", id]);
    }
}
