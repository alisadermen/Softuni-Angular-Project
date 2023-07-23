import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieReviewsListComponent } from './movie-reviews-list.component';

describe('MovieReviewsListComponent', () => {
  let component: MovieReviewsListComponent;
  let fixture: ComponentFixture<MovieReviewsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieReviewsListComponent]
    });
    fixture = TestBed.createComponent(MovieReviewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
