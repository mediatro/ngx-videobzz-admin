import {Observable} from "rxjs";

export type ApiEntity = {
  id: number;
}

export type ApiBasicEntity = ApiEntity & {
  title: string;
}


export type VideoLanguage = ApiBasicEntity;

export type VideoValue = ApiBasicEntity;

export type VideoEnvironment = ApiBasicEntity;

export type VideoCreativeMethod = ApiBasicEntity;

export type VideoCategory = ApiBasicEntity & {
  sub_category: VideoSubCategory[];
}

export type VideoSubCategory = ApiBasicEntity;

export type Video = ApiEntity & {
  title: string,
  short_name: string,
  image: string,
  video_url: string,
}

export type Album = ApiEntity & {
  album: string,
  name: string,
  videos_count: number,
  series_count: number,
  category: number,
  status: string,

  thumbnail_video: Video
}

export type Series = ApiEntity & {
  short_name: string,
  series_sign: string,

  videos: Video[]
}

export type AlbumsWrap = {
  count: number,
  results: Album[]
}

export type SeriesWrap = {
  records: Series[]
}


export interface RestApi {

  getVideoLanguages$(): Observable<VideoLanguage[]>;
  getVideoEnvironments$(): Observable<VideoEnvironment[]>;
  getVideoValues$(): Observable<VideoValue[]>;
  getVideoCreativeMethods$(): Observable<VideoCreativeMethod[]>;

  getVideoCategories$(): Observable<VideoCategory[]>;

  getAlbums$(page: number): Observable<AlbumsWrap>;
  getSeries$(albumId: number): Observable<SeriesWrap>;
  getVideo$(videoId: number): Observable<Video>;


}
