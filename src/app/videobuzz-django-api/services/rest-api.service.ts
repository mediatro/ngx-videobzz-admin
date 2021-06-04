import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {query, QueryOutput} from 'rx-query';
import {filter, map} from "rxjs/operators";


function toAny<T extends QueryOutput<any>>(source: Observable<T>) {
  return source.pipe(
    filter(q => q.status == 'success'),
    map(q => (q.data as any)),
  );
}

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  /*constructor(
    private http: HttpClient,
    @Inject('videobuzz.api.host') private apiHost: string,
    @Inject('videobuzz.api.host.staging') private apiHostStag: string,
  ) { }

  private get$(url: string, params: {[param: string]: string | string[]} = {}, host: string = '') {
    return this.http.get((host || this.apiHost).concat(url), {
      params: {...params,

      }
    });
  }

  getVideoLanguagesRaw$() {
    return this.get$('languages');
  }

  getVideoLanguagesQuery$(){
    return query('languages', () => this.getVideoLanguagesRaw$());
  }
  getVideoLanguages$(): Observable<VideoLanguage[]> {
    return this.getVideoLanguagesQuery$().pipe(
      toAny,
    );
  }

  getVideoEnvironmentsRaw$() {
    return this.get$('environments');
  }
  getVideoEnvironmentsQuery$(){
    return query('environments', () => this.getVideoEnvironmentsRaw$());
  }
  getSeriesEnvironments$(): Observable<SeriesEnvironment[]> {
    return this.getVideoEnvironmentsQuery$().pipe(
      toAny,
    );
  }

  getVideoValuesRaw$() {
    return this.get$('values');
  }
  getVideoValuesQuery$(){
    return query('values', () => this.getVideoValuesRaw$());
  }
  getSeriesSymbols$(): Observable<SeriesSymbol[]> {
    return this.getVideoValuesQuery$().pipe(
      toAny,
    );
  }

  getVideoCreativeMethodsRaw$() {
    return this.get$('creative-methods');
  }
  getVideoCreativeMethodsQuery$(){
    return query('creative_methods', () => this.getVideoCreativeMethodsRaw$());
  }
  getSeriesCreativeMethods$(): Observable<SeriesCreativeMethod[]> {
    return this.getVideoCreativeMethodsQuery$().pipe(
      toAny,
    );
  }

  getVideoCategoriesRaw$() {
    return this.get$('categories');
  }
  getVideoCategoriesQuery$(){
    return query('categories', () => this.getVideoCategoriesRaw$());
  }
  getAlbumCategories$(): Observable<AlbumCategory[]> {
    return this.getVideoCategoriesQuery$().pipe(
      toAny
    );
  }

  getAlbumsRaw$(page: number) {
    return this.get$('',{page: page.toString()});
  }
  getAlbumsQuery$(page: number){
    return query('albums', () => this.getAlbumsRaw$(page));
  }
  getAlbums$(page: number): Observable<AlbumsWrap> {
    return this.getAlbumsQuery$(page).pipe(
      toAny,
    );
  }

  getSeriesRaw$(albumId: number) {
    return this.get$(`${albumId}/series`);
  }
  getSeriesQuery$(albumId: number){
    return query('series',[albumId], ([albumId]) => this.getSeriesRaw$(albumId));
  }
  getSeries$(albumId: number): Observable<SeriesWrap> {
    return this.getSeriesQuery$(albumId).pipe(
      toAny,
    );
  }

  getVideoRaw$(videoId: number) {
    return this.get$(`${videoId}`);
  }
  getVideoQuery$(videoId: number){
    return query('video',[videoId], ([videoId]) => this.getVideoRaw$(videoId));
  }
  getVideo$(videoId: number): Observable<Video> {
    return this.getVideoQuery$(videoId).pipe(
      toAny,
    );
  }*/

}
