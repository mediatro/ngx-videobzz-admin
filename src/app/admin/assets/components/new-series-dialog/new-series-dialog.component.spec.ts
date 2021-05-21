import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSeriesDialogComponent } from './new-series-dialog.component';

describe('NewSeriesDialogComponent', () => {
  let component: NewSeriesDialogComponent;
  let fixture: ComponentFixture<NewSeriesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSeriesDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSeriesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
