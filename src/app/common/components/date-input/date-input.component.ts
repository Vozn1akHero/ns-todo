import { Component, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import * as moment from "moment";

@Component({
    selector: "ns-date-input",
    templateUrl: "./date-input.component.html",
    styleUrls: ["./date-input.component.scss"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DateInputComponent),
            multi: true,
        },
    ],
})
export class DateInputComponent implements ControlValueAccessor {
    value: string;
    propagateChange: any = () => {};

    onDateChange(event) {
        this.value = moment(event.value).format("DD MM YYYY hh:mm:ss");
        this.propagateChange(this.value);
    }
    writeValue(value: string): void {
        this.value = value;
    }
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }
    registerOnTouched(fn: any): void {
        throw new Error("Method not implemented.");
    }
    setDisabledState?(isDisabled: boolean): void {
        throw new Error("Method not implemented.");
    }
}
