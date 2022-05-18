import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function startDateValidate(): ValidatorFn {
    return (date: AbstractControl): ValidationErrors | null => {
        let date1 = new Date();
        console.log(date1)
        let date2 = new Date(date.value)
        console.log(date2)
        if (date2 > date1) {
            return null
        }
        else
        {
            return {d:{value:date.value}}
            
        }
    };
}
