import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private authService: AuthService){

    }

    login(form: NgForm):void{
      console.log(form.value);
      if(form.invalid){
        return;
      }

      const {email, password} = form.value;
      this.authService.login(email, password);
    }
}
