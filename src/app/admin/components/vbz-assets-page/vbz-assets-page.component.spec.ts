import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VbzAssetsPageComponent } from './vbz-assets-page.component';

describe('VbzAssetsPageComponent', () => {
  let component: VbzAssetsPageComponent;
  let fixture: ComponentFixture<VbzAssetsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VbzAssetsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VbzAssetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
