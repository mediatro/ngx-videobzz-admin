import {Component, Inject, Input, OnInit} from '@angular/core';
import {Album, RestApi, Series, Video} from "../../../services/rest-api";
import {ActivatedRoute} from "@angular/router";
import {map, switchMap} from "rxjs/operators";
import {combineLatest} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {NewSeriesDialogComponent} from "../new-series-dialog/new-series-dialog.component";

@Component({
  selector: 'app-album-series-editor',
  templateUrl: './album-series-editor.component.html',
  styleUrls: ['./album-series-editor.component.css']
})
export class AlbumSeriesEditorComponent implements OnInit {

  video?: Video;
  series?: Series[];

  constructor(
    public route: ActivatedRoute,
    @Inject('admin.api.service') private api: RestApi,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      map(p => p['id']),
      switchMap(value => combineLatest([this.api.getVideo$(value), this.api.getSeries$(value)])),
    ).subscribe(([video, series]) => {
      this.video = video;
      this.series = series.records;
    });
  }

  getTotalVideos(): number {
    let ret = 0;
    this.series?.forEach(s=> ret += s.videos.length);
    return ret;
  }

  addSeries(name: string){
    this.series?.push({
      id: 22,
      short_name: name,
      videos: [{
        id: 22,
        short_name: 'mock',
        image: 'https://otziv-otziv.ru/assets/cache/images/688/6874/img_id2778094300891764459-600x600-64e.jpeg',
        title: 'mock',
        video_url: ''
      }],
      series_sign: ''
    });
  }

  handleAddClick(){
    const dialogRef = this.dialog.open(NewSeriesDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.addSeries(result);
    });
  }



}
