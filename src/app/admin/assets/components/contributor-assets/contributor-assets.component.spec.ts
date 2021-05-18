import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorAssetsComponent } from './contributor-assets.component';

describe('ContributorAssetsComponent', () => {
  let component: ContributorAssetsComponent;
  let fixture: ComponentFixture<ContributorAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributorAssetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
