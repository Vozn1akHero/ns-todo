import { NativeScriptRouterModule } from "@nativescript/angular";
import { TodosComponent } from "./todos.component";
import { Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [{ path: "", component: TodosComponent }];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],
})
export class TodosRoutingModule {}
