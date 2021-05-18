import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitTableCellComponent } from './split-table-cell.component';

describe('SplitTableCellComponent', () => {
  let component: SplitTableCellComponent;
  let fixture: ComponentFixture<SplitTableCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitTableCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
