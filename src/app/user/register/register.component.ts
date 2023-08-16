import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { getAuth } from "firebase/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  constructor(private authService: AuthService, private apiService: ApiService){

  }
  
  register(form: NgForm):void{
    console.log(form.value);
    if(form.invalid){
      return;
    }
    const {email, password, name} = form.value;
    this.authService.register(email, password, name);
    const auth = getAuth();
    const user = auth.currentUser;
    const userUid = user?.uid;
    this.apiService.addUsers(form, userUid);
  }
}
