import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { CurrentReviewComponent } from './current-review/current-review.component';
import { AuthActivate } from '../core/guards/auth.activate';

const routes: Routes = [
  {
    path: 'reviews',
    children: [
        {
            path: '',
            pathMatch: 'full',
            component: MainComponent
        },
        {
            path: ':id',
            component: CurrentReviewComponent
        }
    ]
  },
  {
    path: 'add-review',
    component: NewReviewComponent,
    //canActivate: [AuthActivate]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewRoutingModule { }
