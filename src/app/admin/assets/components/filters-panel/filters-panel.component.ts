import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {
  ApiEntity,
  RestApi,
  VideoCategory, VideoCreativeMethod,
  VideoEnvironment,
  VideoLanguage,
  VideoSubCategory, VideoValue
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
  allEnvironments: VideoEnvironment[] = [];
  allValues: VideoValue[] = [];
  allCreativeMethods: VideoCreativeMethod[] = [];
  allCategories: VideoCategory[] = [];
  allSubCategories: VideoSubCategory[] = [];

  constructor(
    private fb: FormBuilder,
    @Inject('admin.api.service') private api: RestApi,
  ) { }

  ngOnInit(): void {
    this.api.getVideoLanguages$().subscribe(value => {
      this.allLanguages = value;
    });
    this.api.getVideoCategories$().subscribe(value => {
      this.allCategories = value;
    });
    this.api.getVideoEnvironments$().subscribe(value => {
      this.allEnvironments = value;
    });
    this.api.getVideoValues$().subscribe(value => {
      this.allValues = value;
    });
    this.api.getVideoCreativeMethods$().subscribe(value => {
      this.allCreativeMethods = value;
    });
  }

  handleCategoryChange(selected: ApiEntity[]){
    let ret: VideoSubCategory[] = [];
    if(selected.length > 0){
      this.allCategories.filter(cat => selected.filter(i => i.id == cat.id).length > 0).forEach(cat => {
        ret = ret.concat(cat.sub_category);
      });
    }
    this.allSubCategories = ret;
  }

}
