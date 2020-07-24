import { EditableOnEnterDirective } from "./components/editable/editable-on-enter.directive";
import { EditModeDirective } from "./components/editable/edit-mode.directive";
import { ViewModeDirective } from "./components/editable/view-mode.directive";
import { BluetoothModalItemComponent } from "./components/bluetooth-modal/bluetooth-modal-item.component";
import { BluetoothProvider } from "./../bluetooth/bluetooth-provider";
import {
    NativeScriptCommonModule,
    NativeScriptFormsModule,
} from "@nativescript/angular";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { DateInputComponent } from "./components/date-input/date-input.component";
import { TodoCheckboxComponent } from "./components/todo-checkbox/todo-checkbox.component";
import { DateValidatorDirective } from "./directives/date-validator.directive";
import { ImgBgBtnComponent } from "./components/img-bg-btn/img-bg-btn.component";
import CustomButtonBase from "./controls/button/custom-button-base";
import { BluetoothModalComponent } from "./components/bluetooth-modal/bluetooth-modal.component";
import { ModalComponent } from "./components/modal/modal.component";
import { EditableComponent } from "./components/editable/editable.component";
import { NsEditableComponent } from "./components/ns-editable/ns-editable.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ReactiveFormsModule,
        FormsModule,
        NativeScriptFormsModule,
    ],
    exports: [
        CalendarComponent,
        DateInputComponent,
        TodoCheckboxComponent,
        ImgBgBtnComponent,
        BluetoothModalComponent,
        ModalComponent,
        BluetoothModalItemComponent,
        EditableComponent,
        DateValidatorDirective,
        ViewModeDirective,
        EditModeDirective,
        EditableOnEnterDirective,
        //CustomButtonBase,
        NsEditableComponent,
    ],
    declarations: [
        CalendarComponent,
        DateInputComponent,
        TodoCheckboxComponent,
        ImgBgBtnComponent,
        BluetoothModalComponent,
        ModalComponent,
        BluetoothModalItemComponent,
        EditableComponent,
        DateValidatorDirective,
        ViewModeDirective,
        EditModeDirective,
        EditableOnEnterDirective,
        NsEditableComponent,
    ],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA],
})
export class CommonModule {}
