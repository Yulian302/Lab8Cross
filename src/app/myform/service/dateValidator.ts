import { AbstractControl, ValidatorFn } from "@angular/forms";
import { ValidatorDateServiceService } from "src/app/services/validator-date-service.service";


function dateValidator(): ValidatorFn {
    return (
        control: AbstractControl
    ): { [key: string]: boolean } | null => {
        let validator = new ValidatorDateServiceService();
        let valid =
            !control.value || validator.validate_date(control.value);
        return valid ? null : { date: true };

    }
}

export default dateValidator;