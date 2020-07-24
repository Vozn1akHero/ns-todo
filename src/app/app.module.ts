import { OverviewComponent } from "./pages/overview/overview.component";
import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
    NativeScriptModule,
    NativeScriptFormsModule,
} from "@nativescript/angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CalendarComponent } from "./common/components/calendar/calendar.component";
import { NavigationButtonComponent } from "./pages/navigation/navigation-button/navigation-button.component";
import { NavigationComponent } from "./pages/navigation/navigation.component";
import { TodoCreationComponent } from "./pages/todo-creation/todo-creation.component";
import { TodoComponent } from "./pages/todos/components/todo/todo.component";
import { TodosComponent } from "./pages/todos/todos.component";
import { TodoCheckboxComponent } from "./common/components/todo-checkbox/todo-checkbox.component";
import { NavCreateButtonComponent } from "./pages/navigation/nav-create-button/nav-create-button.component";
import { DateInputComponent } from "./common/components/date-input/date-input.component";
import { DateValidatorDirective } from "./common/directives/date-validator.directive";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TodosModule } from "./pages/todos/todos.module";
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { CommonModule as CustomCommonModule } from "./common/common.module";
import { SettingsComponent } from "./pages/settings/settings.component";
import { SettingsModule } from "./pages/settings/settings.module";
import { SqliteProvider } from "./sqlite/sqlite-provider";
import { APP_INITIALIZER } from "@angular/core";

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NativeScriptFormsModule,
        TodosModule,
        CustomCommonModule,
        SettingsModule,
    ],
    declarations: [AppComponent],
    providers: [
        SqliteProvider,
        {
            provide: APP_INITIALIZER,
            useFactory: (ds: SqliteProvider) => () => ds.init(),
            deps: [SqliteProvider],
            multi: true,
        },
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
