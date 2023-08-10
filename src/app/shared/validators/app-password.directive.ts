import { Directive, Input, SimpleChanges } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import Validation from './app-password-validator';

@Directive({
  selector: '[matchPasswords]',
  providers:[{
    provide: NG_VALIDATORS,
    useExisting: AppPasswordDirective,
    multi: true
  }]
})
export class AppPasswordDirective implements Validator{

  @Input('matchPasswords') matchPassword: string[] = [];

  validate(formGroup: FormGroup): ValidationErrors | null {
    return Validation.match(this.matchPassword[0], this.matchPassword[1])(formGroup);
  }

  // ngOnChanges(changes: SimpleChanges): void{
  //   //validate on every change
  //   const currentPasswordChanges = changes["formGroup"];
  //   if(currentPasswordChanges){
  //     appPasswordValidator();
  //   }
  // }
  
}
