import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule as LocalCommonModule } from "@app/common/common.module";
import {
    NativeScriptCommonModule,
    NativeScriptFormsModule,
} from "@nativescript/angular";
import { TodoCreationRoutingModule } from "./todo-creation-routing.module";
import { TodoCreationComponent } from "./todo-creation.component";
import { TodoCreationService } from "./todo-creation.service";

@NgModule({
    declarations: [TodoCreationComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        NativeScriptFormsModule,
        NativeScriptCommonModule,
        LocalCommonModule,
        TodoCreationRoutingModule,
    ],
    providers: [TodoCreationService],
    schemas: [NO_ERRORS_SCHEMA],
})
export class TodoCreationModule {}
