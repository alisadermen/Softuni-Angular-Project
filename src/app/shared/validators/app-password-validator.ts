import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";

export default class Validation {
    static match(password: string, confPassword: string) {
      return (formGroup: FormGroup) => {
        const control = formGroup.controls[password];
        const checkControl = formGroup.controls[confPassword];
  
        if (checkControl?.errors && !checkControl.errors['matching']) {
          return null;
        }
  
        if (control?.value !== checkControl?.value) {
          checkControl?.setErrors({ matching: true });
          return { matching: true };
        } else {
          checkControl?.setErrors(null);
          return null;
        }
      };
    }
  }