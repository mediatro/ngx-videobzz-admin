import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorAssetsPageComponent } from './contributor-assets-page.component';

describe('ContributorAssetsPageComponent', () => {
  let component: ContributorAssetsPageComponent;
  let fixture: ComponentFixture<ContributorAssetsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributorAssetsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorAssetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
