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
import {debounceTime, map, startWith, switchMap} from "rxjs/operators";
import {SelectionModel} from "@angular/cdk/collections";
import {PageEvent} from "@angular/material/paginator/paginator";
import {AssetModel, ExtraColumn} from "../assets-datagrid/assets-datagrid.component";
import {MatSidenav} from "@angular/material/sidenav/sidenav";
import {Sort} from "@angular/material/sort/sort";
import {FormControl} from "@angular/forms";

type AlbumAssetModel = AssetModel & Album & {
  contributor: string;
}

@Component({
  selector: 'app-contributor-assets',
  templateUrl: './contributor-assets.component.html',
  styleUrls: ['./contributor-assets.component.css']
})
export class ContributorAssetsComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource<Album>([]);
  selection = new SelectionModel<Album>(true, []);
  resultsLength = 0;

  beforeDisplayedColumns = ['contributor', 'series'];
  afterDisplayedColumns = ['settings'];

  onPageChange = new Subject<PageEvent>();
  onSortChange = new Subject<Sort>();

  @ViewChild('snav') snav!: MatSidenav;

  searchControl = new FormControl('');

  constructor(
    @Inject('admin.api.service') private api: RestApi,
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {


    merge(this.onPageChange, this.onSortChange, this.searchControl.valueChanges.pipe(
      debounceTime(500),
    )).pipe(
      startWith({}),
      switchMap((value: any) => {
        return this.api.getAlbums$(
          value.pageIndex ? value.pageIndex + 1 : 1,
          value.active ? value : null,
          this.searchControl.value
        );
      }),
      map(wrap => {
        this.resultsLength = wrap["hydra:totalItems"];
        return wrap;
      }),
    ).subscribe(data => {
      this.dataSource.data = data["hydra:member"];
    });
  }

  onSidenavToggle(){
    this.snav.toggle();
  }

}
