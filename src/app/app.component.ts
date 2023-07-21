import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { MovieReview } from './models/movie-review.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-project-softuni';
  firestore: Firestore = inject(Firestore);
  //movieReviewsRef: AngularFirestoreCollection<MovieReview>;
  movieReview$: Observable<any[]>;
  constructor(){
    const movieReviewsRef = collection(this.firestore,'movie-reviews');
    this.movieReview$ = collectionData(movieReviewsRef);
  }
}
