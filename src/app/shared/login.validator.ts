import { FormControl } from "@angular/forms";

export class LoginValidator {

    static shouldContainCodidoes(control: FormControl) {
        const subString = 'codiodes';
        if (control.value.length<= 0) {
            return null;
        }
        if (control.value.indexOf(subString) != -1) {
            return null;
        } else {
            return {shouldContainCodiodes: true};
        }
    }

}