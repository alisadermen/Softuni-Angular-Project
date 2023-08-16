import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; 
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) {
  }

  login(email: string, password: string){
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['home']);

    }, err => {
        alert("Something went wrong");
        this.router.navigate(['/login']);
    })
  }
  
  async register(email: string, password: string, name: string/*photoURL: string*/){
    this.fireauth.createUserWithEmailAndPassword(email, password).then((userCredentials) => {
      alert("Registration was succesfull");
      let user = userCredentials.user;
      this.router.navigate(['/login']);
      return user?.updateProfile({
        displayName: name,
        //photoURL: photoURL
      });
    })
    .then(() => {
      alert('Profile created sucessfully');
    })
    .catch((error) => {
      alert("Something went wrong");
      this.router.navigate(['/register']);
    });
  }

  logout(){
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');

      this.router.navigate(['/login']);

    }, err => {
        alert("Something went wrong");
    })
  }
}
