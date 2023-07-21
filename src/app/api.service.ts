import { Injectable } from '@angular/core';
import { Firestore, Query, collection, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { MovieReview } from './models/movie-review.model';
import { collectionData } from 'rxfire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  firestore: Firestore = inject(Firestore);
  //movieReview$: Observable<any[]>;

  constructor(){}
  
  getReviews(): Observable<any[]>{
    const movieReviewsRef = collection(this.firestore,'movie-reviews');
    const movieReview$ = collectionData(movieReviewsRef);
    // const reviews: MovieReview[] = [];
    // await movieReview$.forEach(element => {
    //   const review = this.mapResultToMovieReview(element);
    //   reviews.push(review);
    // });
    // return reviews;
    return movieReview$;
  }

  mapResultToMovieReview = (result: any): MovieReview => {
    
    return {
        id: result.id,
        author: result.author,
        title: result.title,
        date: result.date,
        content: result.content
    };
}
  getPosts(){}
}


