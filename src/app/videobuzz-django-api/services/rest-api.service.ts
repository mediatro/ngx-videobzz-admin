import {Inject, Injectable} from '@angular/core';
import {
  RestApi, Video,
  VideoCategory,
  VideoCreativeMethod,
  VideoEnvironment,
  VideoLanguage,
  VideoValue, VideoWrap
} from "../../admin/services/rest-api";
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
export class RestApiService implements RestApi {

  constructor(
    private http: HttpClient,
    @Inject('videobuzz.api.host') private apiHost: string,
    @Inject('videobuzz.api.host.staging') private apiHostStag: string,
  ) { }

  private get$(url: string, host: string = '', params: {[param: string]: string | string[]} = {}) {
    return this.http.get((host || this.apiHost).concat(url), {
      params: {...params,

      }
    });
  }

  getVideoEnvironments(): VideoEnvironment[] {
    return [];
  }

  getVideoLanguagesRaw$() {
    return this.get$('languages', this.apiHostStag);
  }
  getVideoLanguagesQuery$(){
    return query('languages', () => this.getVideoLanguagesRaw$());
  }
  getVideoLanguages$(): Observable<VideoLanguage[]> {
    return this.getVideoLanguagesQuery$().pipe(
      toAny,
    );
  }

  getVideoValues(): VideoValue[] {
    return [];
  }

  getVideoVideoCreativeMethods(): VideoCreativeMethod[] {
    return [];
  }

  getVideoVideoCategoriesRaw$() {
    return this.get$('categories');
  }
  getVideoVideoCategoriesQuery$(){
    return query('categories', () => this.getVideoVideoCategoriesRaw$());
  }
  getVideoVideoCategories$(): Observable<VideoCategory[]> {
    return this.getVideoVideoCategoriesQuery$().pipe(
      toAny
    );
  }

  getVideoVideosRaw$(page: number) {
    return this.get$('', '', {page: page.toString()});
  }
  getVideoVideosQuery$(page: number){
    return query('videos', () => this.getVideoVideosRaw$(page));
  }
  getVideos$(page: number): Observable<VideoWrap> {
    return this.getVideoVideosQuery$(page).pipe(
      toAny,
    );
  }

}
