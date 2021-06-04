import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {
  ApiEntity,
  RestApi,
  AlbumCategory, SeriesCreativeMethod,
  SeriesEnvironment,
  VideoLanguage,
  AlbumSubCategory, SeriesSymbol
} from "../../../services/rest-api";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-filters-panel',
  templateUrl: './filters-panel.component.html',
  styleUrls: ['./filters-panel.component.css']
})
export class FiltersPanelComponent implements OnInit {

  formGroup = this.fb.group({
    quality: this.fb.control([]),
    popularity: this.fb.control([]),
    direction: this.fb.control([]),
  });

  qualityChoices = ['720', '1080', '4k'];
  popularityChoices = ['Most', 'Least'];
  directionChoices = ['Horizontal', 'Vertical'];

  allLanguages: VideoLanguage[] = [];
  allEnvironments: SeriesEnvironment[] = [];
  allValues: SeriesSymbol[] = [];
  allCreativeMethods: SeriesCreativeMethod[] = [];
  allCategories: AlbumCategory[] = [];
  allSubCategories: AlbumSubCategory[] = [];

  constructor(
    private fb: FormBuilder,
    @Inject('admin.api.service') private api: RestApi,
  ) { }

  ngOnInit(): void {
    this.api.getVideoLanguages$().subscribe(value => {
      this.allLanguages = value["hydra:member"];
    });
    this.api.getAlbumCategories$().subscribe(value => {
      this.allCategories = value["hydra:member"];
    });
    this.api.getSeriesEnvironments$().subscribe(value => {
      this.allEnvironments = value["hydra:member"];
    });
    this.api.getSeriesSymbols$().subscribe(value => {
      this.allValues = value["hydra:member"];
    });
    this.api.getSeriesCreativeMethods$().subscribe(value => {
      this.allCreativeMethods = value["hydra:member"];
    });
  }

  handleCategoryChange(selected: ApiEntity[]){
    let ret: AlbumSubCategory[] = [];
    if(selected.length > 0){
      this.allCategories.filter(cat => selected.filter(i => i.id == cat.id).length > 0).forEach(cat => {
        ret = ret.concat(cat.subCategories);
      });
    }
    this.allSubCategories = ret;
  }

}
