import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User | undefined;
  USER_KEY = '[user]';
  
  get isLogged(): boolean{
    return !!this.user; //ako q ima vrushta true, inache false
  }

  constructor() {
    try{
      const lsUSer = localStorage.getItem(this.USER_KEY) || "";
      this.user = JSON.parse(lsUSer);
    }catch(error){
      this.user = undefined;
    }
   }

   login(email: string, password: string):void{
    // this.user = {
    //   email: 'johndoe@gmail.com',
    //   name: 'John Doe'
    // };

    // localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));


   }

   logout():void{
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
   }
}
