import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { ApiService } from '../api.service';
import { MovieReview } from '../models/movie-review.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  private apiService: ApiService;
  movieReviews: Observable<any[]>;
  constructor(apiService: ApiService){
    this.apiService = apiService;
    this.movieReviews = apiService.getReviews()
    
  }


}
