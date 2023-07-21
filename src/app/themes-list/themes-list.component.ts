import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit{
  //movieReview$: Observable<any[]>;

  constructor(private apiService: ApiService){

  }

  ngOnInit(): void {
    //this.movieReview$ = collectionData(this.apiService.getReviews());
  }
}
