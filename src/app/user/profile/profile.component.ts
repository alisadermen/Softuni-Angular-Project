import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieReview } from 'src/app/models/movie-review.model';
import { ApiService } from 'src/app/services/api.service';
import { getAuth } from "firebase/auth";

interface Profile {
  name: string;
  email: string;
  password: string;
  confPassword: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  reviews: MovieReview[] = [];
  thereAreNoReviews: boolean = false;
  inEditMode: boolean = false;
  private user: any;
  profileDetails: Profile = {
    name: 'John',
    email: 'john@email.com',
    password: 'john12345',
    confPassword: 'john12345'
  };
  
  constructor(private apiService: ApiService){
  }  

  
  uploadImage(){
    const auth = getAuth();
    this.user = auth.currentUser;


  }

  toggleEditMode():void{
    this.inEditMode = !this.inEditMode;
  }

  edit(form: NgForm):void{
    console.log(form.value);
    if(form.invalid){
      return;
    }
    this.profileDetails = form.value;
    console.log(this.profileDetails);

    this.toggleEditMode();
    
  }

  ngOnInit(): void {
    this.apiService.getReviews().subscribe((reviews)=>{
      this.reviews = reviews;
      console.log();
      
      if(reviews.length === 0){
        this.thereAreNoReviews = true;
      }
    })
  }
}
