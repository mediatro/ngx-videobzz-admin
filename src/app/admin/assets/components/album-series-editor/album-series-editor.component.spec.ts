import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumSeriesEditorComponent } from './album-series-editor.component';

describe('AlbumSeriesEditorComponent', () => {
  let component: AlbumSeriesEditorComponent;
  let fixture: ComponentFixture<AlbumSeriesEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumSeriesEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumSeriesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
