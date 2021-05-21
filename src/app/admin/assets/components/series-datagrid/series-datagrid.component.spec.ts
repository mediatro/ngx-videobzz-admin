import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesDatagridComponent } from './series-datagrid.component';

describe('SeriesDatagridComponent', () => {
  let component: SeriesDatagridComponent;
  let fixture: ComponentFixture<SeriesDatagridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesDatagridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesDatagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
