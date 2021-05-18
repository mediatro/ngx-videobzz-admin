import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterChoiceComponent } from './filter-choice.component';

describe('FilterChoiceComponent', () => {
  let component: FilterChoiceComponent;
  let fixture: ComponentFixture<FilterChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
