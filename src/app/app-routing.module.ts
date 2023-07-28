import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AuthActivate } from './core/guards/auth.activate';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    //canActivate: [AuthActivate] ne razbira zashto tuk i na register go ima
  },
  {
    path: 'register',
    component: RegisterComponent,
    //canActivate: [AuthActivate]

  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthActivate]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
