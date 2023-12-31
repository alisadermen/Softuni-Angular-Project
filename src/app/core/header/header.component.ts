import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private userService: UserService, private router: Router){
    
  }

  get isLogged():boolean{
    return this.userService.isLogged;
  }

  get username(): string{
    return this.userService.user?.name || '';
  }

  logout(): void{
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
