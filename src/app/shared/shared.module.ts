import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppEmailDirective } from './validators/app-email.directive';
import { AppPasswordDirective } from './validators/app-password.directive';



@NgModule({
  declarations: [AppEmailDirective, AppPasswordDirective],
  imports: [
    CommonModule
  ],
  exports:[AppEmailDirective, AppPasswordDirective]
})
export class SharedModule { }
