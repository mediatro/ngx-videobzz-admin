import {Observable} from "rxjs";

export type ApiEntity = {
  id: number;
  title: string;
}

export type VideoLanguage = ApiEntity;

export type VideoValue = ApiEntity;

export type VideoEnvironment = ApiEntity;

export type VideoCreativeMethod = ApiEntity;

export type VideoCategory = ApiEntity & {
  sub_category: VideoSubCategory[];
}

export type VideoSubCategory = ApiEntity;

export type Video = ApiEntity & {
  name: string,
  thumbnail_video:{
    image: string,
    video_url: string,
  }
}

export type VideoWrap = {
  count: number,
  results: Video[]
}


export interface RestApi {

  getVideoLanguages$(): Observable<VideoLanguage[]>;
  getVideoValues(): VideoValue[];
  getVideoEnvironments(): VideoEnvironment[];
  getVideoVideoCreativeMethods(): VideoCreativeMethod[];
  getVideoVideoCategories$(): Observable<VideoCategory[]>;

  getVideos$(page: number): Observable<VideoWrap>;

}
