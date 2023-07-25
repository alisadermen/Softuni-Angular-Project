import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{
  private apiService: ApiService;
  users: User[] = [];
  
  constructor(apiService: ApiService){
    this.apiService = apiService;
  }  

  ngOnInit(): void {
    this.apiService.getUsers().subscribe((users)=>{
      this.users = users;
    })
  }
}
