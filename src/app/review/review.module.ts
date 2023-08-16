import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewReviewComponent } from './new-review/new-review.component';
import { CurrentReviewComponent } from './current-review/current-review.component';
import { ReviewRoutingModule } from './review-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewReviewComponent,
    CurrentReviewComponent
  ],
  imports: [
    CommonModule,
    ReviewRoutingModule,
    FormsModule
  ]
})
export class ReviewModule { }
