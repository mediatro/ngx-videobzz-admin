import {
  AfterViewInit,
  Component,
  ContentChild,
  Inject,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Album, RestApi} from "../../../services/rest-api";
import {MatPaginator} from "@angular/material/paginator";
import {merge, Observable, Subject} from "rxjs";
import {map, startWith, switchMap} from "rxjs/operators";
import {SelectionModel} from "@angular/cdk/collections";
import {PageEvent} from "@angular/material/paginator/paginator";
import {AssetModel, ExtraColumn} from "../assets-datagrid/assets-datagrid.component";
import {MatSidenav} from "@angular/material/sidenav/sidenav";

type AlbumAssetModel = AssetModel & Album & {
  contributor: string;
}

@Component({
  selector: 'app-contributor-assets',
  templateUrl: './contributor-assets.component.html',
  styleUrls: ['./contributor-assets.component.css']
})
export class ContributorAssetsComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource<AlbumAssetModel>([]);
  selection = new SelectionModel<AlbumAssetModel>(true, []);
  resultsLength = 0;

  beforeDisplayedColumns = ['contributor','album'];
  afterDisplayedColumns = ['settings'];

  onPageChange = new Subject<PageEvent>();

  @ViewChild('snav') snav!: MatSidenav;



  constructor(
    @Inject('admin.api.service') private api: RestApi,
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.onPageChange.pipe(
      startWith({pageIndex: 0}),
      switchMap((value) => this.api.getAlbums$(value.pageIndex+1)),
      map(wrap => {
        this.resultsLength = wrap.count;

        return wrap.results.map(v => ({...v,
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

  onSidenavToggle(){
    this.snav.toggle();
  }

}
