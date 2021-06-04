import {Inject, Injectable} from '@angular/core';
import {query, QueryOutput} from "rx-query";
import {Observable} from "rxjs";
import {filter, map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {RestApi} from "../../admin/services/rest-api";
import {Sort} from "@angular/material/sort/sort";


function toAny<T extends QueryOutput<any>>(source: Observable<T>) {
  return source.pipe(
    filter(q => q.status == 'success'),
    map(q => (q.data as any)),
  );
}


@Injectable({
  providedIn: 'root'
})
export class ApiplatformOpenapiService implements RestApi {

  constructor(
    private http: HttpClient,
    @Inject('videobzz.api.host') private apiHost: string,
  ) { }

  private get$(url: string, params: {[param: string]: string | string[]} = {}, host: string = '') {
    return this.http.get((host || this.apiHost).concat(url), {
      params: {...params,

      }
    });
  }

  getVideoLanguagesRaw$() {
    return this.get$('video_languages');
  }

  getVideoLanguagesQuery$(){
    return query('video_languages', () => this.getVideoLanguagesRaw$());
  }


  getVideoLanguages$() {
    return this.getVideoLanguagesQuery$().pipe(
      toAny,
    );
  }

  getVideoValuesRaw$() {
    return this.get$('series_symbols');
  }
  getVideoValuesQuery$(){
    return query('series_symbols', () => this.getVideoValuesRaw$());
  }
  getSeriesSymbols$() {
    return this.getVideoValuesQuery$().pipe(
      toAny,
    );
  }

  getVideoEnvironmentsRaw$() {
    return this.get$('series_environments');
  }
  getVideoEnvironmentsQuery$(){
    return query('series_environments', () => this.getVideoEnvironmentsRaw$());
  }
  getSeriesEnvironments$() {
    return this.getVideoEnvironmentsQuery$().pipe(
      toAny,
    );
  }

  getVideoCreativeMethodsRaw$() {
    return this.get$('series_creative_methods');
  }
  getVideoCreativeMethodsQuery$(){
    return query('series_creative_methods', () => this.getVideoCreativeMethodsRaw$());
  }
  getSeriesCreativeMethods$() {
    return this.getVideoCreativeMethodsQuery$().pipe(
      toAny,
    );
  }

  getVideoCategoriesRaw$() {//TODO: rename all to new
    return this.get$('album_categories');
  }
  getVideoCategoriesQuery$(){
    return query('album_categories', () => this.getVideoCategoriesRaw$());
  }
  getAlbumCategories$() {
    return this.getVideoCategoriesQuery$().pipe(
      toAny
    );
  }

  getAlbumSubCategoriesRaw$() {
    return this.get$('album_subcategories');
  }
  getAlbumSubCategoriesQuery$(){
    return query('album_subcategories', () => this.getAlbumSubCategoriesRaw$());
  }
  getAlbumSubCategories$() {
    return this.getAlbumSubCategoriesQuery$().pipe(
      toAny
    );
  }

  getAlbumsRaw$(page: number, sort?: Sort, filter?: string) {
    let ret: any = {page: page.toString()};
    if(sort && sort.active){
      ret[`order[${sort.active}]`] = sort.direction.toUpperCase();
    }
    if(filter){
      ret['name'] = filter;
    }
    return this.get$('albums', ret);
  }
  getAlbumsQuery$(page: number, sort?: Sort, filter?: string){
    return query('albums', {page: page, sort: sort, filter: filter}, ({page,sort, filter}) => this.getAlbumsRaw$(page, sort, filter));
  }
  getAlbums$(page: number, sort?: Sort, filter?: string) {
    return this.getAlbumsQuery$(page, sort, filter).pipe(
      toAny,
    );
  }

  getSeriesRaw$(albumId: string) {
    return this.get$('series');
  }
  getSeriesQuery$(albumId: string){
    return query('series',[albumId], ([albumId]) => this.getSeriesRaw$(albumId));
  }
  getSeries$(albumId: string) {
    return this.getSeriesQuery$(albumId).pipe(
      toAny,
    );
  }

  getVideoRaw$(seriesId: string) {
    return this.get$('videos');
  }
  getVideoQuery$(seriesId: string){
    return query('videos',[seriesId], ([seriesId]) => this.getVideoRaw$(seriesId));
  }
  getVideos$(seriesId: string) {
    return this.getVideoQuery$(seriesId).pipe(
      toAny,
    );
  }



}
