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

  @Input() series!: Series;

  dataSource = new MatTableDataSource<Video>([]);
  selection = new SelectionModel<Video>(true, []);
  resultsLength = 0;

  allAlbums: Album[] = [];



  constructor(
    @Inject('admin.api.service') private api: RestApi,
  ) { }

  ngOnInit(): void {
    this.api.getAlbums$(1).subscribe(value => this.allAlbums = value["hydra:member"]);
    this.dataSource.data = this.series.videos;
    this.resultsLength = this.series.videos.length;
  }

}
