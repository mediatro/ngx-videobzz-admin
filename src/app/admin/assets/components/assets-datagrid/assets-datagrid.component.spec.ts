import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsDatagridComponent } from './assets-datagrid.component';

describe('AssetsDatagridComponent', () => {
  let component: AssetsDatagridComponent;
  let fixture: ComponentFixture<AssetsDatagridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsDatagridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsDatagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
