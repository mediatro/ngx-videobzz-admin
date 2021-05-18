import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {RestApi} from "../../../services/rest-api";
import {MatPaginator} from "@angular/material/paginator";
import {merge, Observable} from "rxjs";
import {map, startWith, switchMap} from "rxjs/operators";
import {FormBuilder} from "@angular/forms";
import {SelectionModel} from "@angular/cdk/collections";

export type AlbumModel = {
  name: string;
  assets: any[];
}

export type AssetModel = {
  id: number,
  thumbnail: string;
  name: string;
  contributor: string;
  album?: AlbumModel;
  uploadDate: Date;
  shareCount: number;
  downloadCount: number;
  linkCount: number;
  play: {
    count: number,
    url: string,
  };
}

const MOCK_ASSETS: AssetModel[] = [
  {id: 1, album: {name: 'Window tutorials', assets: [0,0,0,0,0,0,0,0]}, thumbnail: 'thumb', name: 'Window beginer 1', contributor: 'Ron Amano', uploadDate: new Date(), shareCount: 220, downloadCount: 350, linkCount: 129, play: {count: 3754, url: ''}},
];

@Component({
  selector: 'app-contributor-assets',
  templateUrl: './contributor-assets.component.html',
  styleUrls: ['./contributor-assets.component.css']
})
export class ContributorAssetsComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource<AssetModel>([]);
  resultsLength = 0;

  displayedColumns: string[] = [
    'id',
    'thumbnail',
    'name',
    'contributor',
    'album',
    'uploadDate',
    'shareCount',
    'downloadCount',
    'linkCount',
    'play',
    'settings',
    'delete',
    'reorder',
  ];

  selection = new SelectionModel<AssetModel>(true, []);
  dragEnabled = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    @Inject('admin.api.service') private api: RestApi,
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    merge(this.paginator.page).pipe(
      startWith({}),
      switchMap(() => this.api.getVideos$(this.paginator.pageIndex+1)),
      map(wrap => {
        this.resultsLength = wrap.count;

        return wrap.results.map(v => ({
          id: v.id,
          album: {name: 'Window tutorials', assets: [0, 0, 0, 0, 0, 0, 0, 0]},
          thumbnail: v.thumbnail_video.image,
          name: v.name,
          contributor: 'Ron Amano',
          uploadDate: new Date(),
          shareCount: 220,
          downloadCount: 350,
          linkCount: 129,
          play: {
            count: 3754,
            url: v.thumbnail_video.video_url
          }
        }))
      }),
    ).subscribe(data => {
      this.dataSource.data = data;
    });
  }

  isRowSelected(row: AssetModel): boolean {
    return this.selection.selected.includes(row);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  handlePlayClick(url: string){
    let w = window.open(url, '_blank');
    if(w) {
      w.focus();
    }
  }


}
