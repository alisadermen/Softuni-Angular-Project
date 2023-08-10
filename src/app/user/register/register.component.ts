import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  constructor(private userService: UserService, private router: Router){

  }
  
  register(form: NgForm):void{
    console.log(form.value);
    if(form.invalid){
      return;
    }
    this.router.navigate(["/login"]);
  }
}
