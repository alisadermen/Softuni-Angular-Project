import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-project-softuni';
  userData!: Observable<any>;

  constructor(private apiService: ApiService){
    this.userData = this.getUsers();
  }

  getUsers(): Observable<any[]>{
    return this.apiService.getUsers();
  }

  addUsers(f: any){
    this.apiService.addUsers(f);
  }

  deleteUsers(id: string){
    this.apiService.deleteUsers(id);
  }

  updateUsers(id: string){
    this.apiService.updateUsers(id);
  }
}