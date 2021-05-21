import {Component, Inject, Input, OnInit} from '@angular/core';
import {Album, RestApi, Series, Video} from "../../../services/rest-api";
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {AssetModel} from "../assets-datagrid/assets-datagrid.component";

type SeriesAssetModel = AssetModel & Video;

@Component({
  selector: 'app-series-datagrid',
  templateUrl: './series-datagrid.component.html',
  styleUrls: ['./series-datagrid.component.css']
})
export class SeriesDatagridComponent implements OnInit {

  @Input() serie!: Series;

  dataSource = new MatTableDataSource<SeriesAssetModel>([]);
  selection = new SelectionModel<SeriesAssetModel>(true, []);
  resultsLength = 0;

  allAlbums: Album[] = [];



  constructor(
    @Inject('admin.api.service') private api: RestApi,
  ) { }

  ngOnInit(): void {
    this.api.getAlbums$(1).subscribe(value => this.allAlbums = value.results);


    this.dataSource.data = this.serie.videos.map(v => ({...v,
      thumbnail_video: v,
      uploadDate: new Date(),
      shareCount: 220,
      downloadCount: 350,
      linkCount: 129,
      play: {
        count: 3754,
        url: v.video_url
      }
    }));

    this.resultsLength = this.serie.videos.length;
  }

}
