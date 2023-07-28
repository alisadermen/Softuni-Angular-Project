import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { MovieReview } from '../models/movie-review.model';

@Component({
  selector: 'app-movie-reviews-list',
  templateUrl: './movie-reviews-list.component.html',
  styleUrls: ['./movie-reviews-list.component.css']
})
export class MovieReviewsListComponent implements OnInit{
  private apiService: ApiService;
  reviews: MovieReview[] = [];
  thereAreNoReviews: boolean = false;
  
  constructor(apiService: ApiService){
    this.apiService = apiService;
  }  

  ngOnInit(): void {
    this.apiService.getReviews().subscribe((reviews)=>{
      this.reviews = reviews;
      //this.reviews = []; za testvane na thereAreNoReviews
      if(reviews.length === 0){
        this.thereAreNoReviews = true;
      }
    })
  }
}
