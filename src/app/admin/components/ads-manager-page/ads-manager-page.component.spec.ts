import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsManagerPageComponent } from './ads-manager-page.component';

describe('AdsManagerPageComponent', () => {
  let component: AdsManagerPageComponent;
  let fixture: ComponentFixture<AdsManagerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsManagerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
