import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TodosRoutingModule } from "./todos-routing.module";
import { NgModule } from "@angular/core";
import { TodosComponent } from "./todos.component";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { TodoComponent } from "./components/todo/todo.component";
import { TodoService } from "./services/todo.service";
import { TodoCheckOffBtnComponent } from "./components/todo/todo-status-switch-btn/todo-status-switch-btn.component";
import { CommonModule } from "@app/common/common.module";

@NgModule({
    imports: [NativeScriptCommonModule, TodosRoutingModule, CommonModule],
    declarations: [TodosComponent, TodoComponent, TodoCheckOffBtnComponent],
    providers: [TodoService],
    schemas: [NO_ERRORS_SCHEMA],
})
export class TodosModule {}
