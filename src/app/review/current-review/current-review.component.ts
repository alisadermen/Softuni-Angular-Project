import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieReview } from 'src/app/models/movie-review.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-current-review',
  templateUrl: './current-review.component.html',
  styleUrls: ['./current-review.component.css']
})
export class CurrentReviewComponent implements OnInit {
  private id: string | null | undefined;
  review!: MovieReview | null;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);

    if(this.id !== null && this.id !== undefined){
      this.apiService.getReviewById(this.id).then((review) => {
        console.log("Current Review:", review);
        this.review = review;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      
    }
  }
  
}
