import { TodoCreationComponent } from "./todo-creation.component";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

const routes: Routes = [{ path: "", component: TodoCreationComponent }];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],
    providers: [],
})
export class TodoCreationRoutingModule {}
