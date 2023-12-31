import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentReviewComponent } from './current-review.component';

describe('CurrentReviewComponent', () => {
  let component: CurrentReviewComponent;
  let fixture: ComponentFixture<CurrentReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentReviewComponent]
    });
    fixture = TestBed.createComponent(CurrentReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
