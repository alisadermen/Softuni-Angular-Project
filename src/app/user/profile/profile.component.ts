import { Component, OnInit } from '@angular/core';
import { MovieReview } from 'src/app/models/movie-review.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  reviews: MovieReview[] = [];
  thereAreNoReviews: boolean = false;
  
  constructor(private apiService: ApiService){
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
