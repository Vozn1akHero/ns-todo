import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms";
import * as moment from "moment";

@Directive({
    selector: "[appValidateDate]",
    providers: [
        {
            provide: NG_VALIDATORS,
            useClass: DateValidatorDirective,
            multi: true,
        },
    ],
})
export class DateValidatorDirective implements Validator {
    validate(control: AbstractControl): { [key: string]: any } | null {
        const date = control.value;
        console.log(`values: ${date}`);
        const res: boolean = moment(date, "MM/DD/YYYY", true).isValid();
        if (!res) {
            return { DateIsNotCorrect: true };
        }
        return null;
    }
}
