import { AppComponent } from "./app.component";
import { TodoCreationComponent } from "./pages/todo-creation/todo-creation.component";
import { NavigationComponent } from "./pages/navigation/navigation.component";
import { TodoComponent } from "./pages/todos/components/todo/todo.component";
import { TodosComponent } from "./pages/todos/todos.component";
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "/nav" },
    {
        path: "nav",
        loadChildren: () =>
            import("./pages/navigation/navigation.module").then(
                (m) => m.NavigationModule
            ),
    },
    {
        path: "todos",
        loadChildren: () =>
            import("./pages/todos/todos.module").then((m) => m.TodosModule),
    },
    {
        path: "create",
        loadChildren: () =>
            import("./pages/todo-creation/todo-creation.module").then(
                (m) => m.TodoCreationModule
            ),
    },
    {
        path: "settings",
        loadChildren: () =>
            import("./pages/settings/settings.module").then(
                (m) => m.SettingsModule
            ),
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
