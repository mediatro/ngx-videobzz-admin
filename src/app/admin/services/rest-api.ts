import {Observable} from "rxjs";
import {Sort} from "@angular/material/sort/sort";

export type ApiEntity = {
  id: string;
}

export type ApiNamedEntity = ApiEntity & {
  name: string;
}

export type SortableEntity = {
  position: number,
}

export type TimestampableEntity = {
  createdAt: Date,
  updatedAt: Date,
}

export type ApprovalStatusEntity = {
  approvalStatus: string,
  rejectionReasons: string[],
  rejectionReasonOther?: string,
}

export type InteractionCountersEntity = {
  shareCount: number,
  downloadCount: number,
  linkCount: number,
  playCount: number,
  totalInteractionsCount: number,
}



export type AlbumCategory = ApiNamedEntity & {
  contentType: string,
  subCategories: AlbumSubCategory[],
}

export type AlbumSubCategory = ApiNamedEntity & {
  category: AlbumCategory,
};

export type SeriesSymbol = ApiNamedEntity;

export type SeriesEnvironment = ApiNamedEntity;

export type SeriesCreativeMethod = ApiNamedEntity;

export type VideoLanguage = ApiNamedEntity;



export type Contributor = ApiNamedEntity;

export type Album = ApiNamedEntity & TimestampableEntity & SortableEntity & InteractionCountersEntity & ApprovalStatusEntity & {
  pageNumber?: number,
  lineNumber?: number,
  playerNumber?: number,

  contentType: string,
  contentSubtype: string,

  category: AlbumCategory,
  subCategories: AlbumSubCategory[],

  contributor: Contributor,
  series: Series[],
  thumbnailVideo: Video,

  seriesCount: number,
  videosCount: number,
}

export type Series = ApiNamedEntity & SortableEntity & InteractionCountersEntity & ApprovalStatusEntity & {
  keywords: string[],
  description?: string,
  symbol?: SeriesSymbol,
  creativeMethod?: SeriesCreativeMethod,
  environment?: SeriesEnvironment,

  contributor: Contributor,
  album: Album,
  videos: Video[],
}

export type Video = ApiEntity & TimestampableEntity & SortableEntity & InteractionCountersEntity & ApprovalStatusEntity &  {
  duration: number,
  thumbnailImageUrl: string,

  aspectRatio: string,
  symbolValue?: string,
  soundtrack?: string,
  soundtrackLicense?: string,

  languageText?: VideoLanguage,
  languageSubtitles?: VideoLanguage,
  languageVoiceover?: VideoLanguage,

  series: Series[],
  variants: any[],
}

export type HydraWrap<T> = {
  "hydra:member": T[],
  "hydra:totalItems": number,
}


export interface RestApi {

  getAlbumCategories$(): Observable<HydraWrap<AlbumCategory>>;
  getAlbumSubCategories$(): Observable<HydraWrap<AlbumSubCategory>>;
  getSeriesEnvironments$(): Observable<HydraWrap<SeriesEnvironment>>;
  getSeriesSymbols$(): Observable<HydraWrap<SeriesSymbol>>;
  getSeriesCreativeMethods$(): Observable<HydraWrap<SeriesCreativeMethod>>;
  getVideoLanguages$(): Observable<HydraWrap<VideoLanguage>>;

  getAlbums$(page: number, sort?: Sort, filter?: string): Observable<HydraWrap<Album>>;
  getSeries$(albumId: string): Observable<HydraWrap<Series>>;
  getVideos$(seriesId: string): Observable<HydraWrap<Video>>;


}
