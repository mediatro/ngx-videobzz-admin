import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ContentChild,
  TemplateRef,
  ElementRef,
  ViewChild, AfterViewInit, ContentChildren, QueryList, AfterContentChecked, ViewChildren, ViewContainerRef
} from '@angular/core';
import {SelectionModel} from "@angular/cdk/collections";
import {MatColumnDef, MatTable, MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {PageEvent} from "@angular/material/paginator/paginator";
import {FormBuilder, FormControl} from "@angular/forms";

export type AssetModel = {
  uploadDate: Date;
  shareCount: number;
  downloadCount: number;
  linkCount: number;
  play: {
    count: number,
    url: string,
  };
}

export type ExtraColumn = {
    id: string,
    hasSort: boolean,
    headerTpl: string,
    cellTpl: TemplateRef<any>,
}

enum StatusEnum {
  Pending,
  Active,
  Rejected
}

@Component({
  selector: 'app-assets-datagrid',
  templateUrl: './assets-datagrid.component.html',
  styleUrls: ['./assets-datagrid.component.css']
})
export class AssetsDatagridComponent implements OnInit, AfterViewInit, AfterContentChecked {


  @Input() resultsLength = 0;
  @Input() dataSource = new MatTableDataSource<any>([]);
  @Input() selection = new SelectionModel<any>(true, []);
  @Input() set beforeDisplayedColumns(value: string[]) {
    this._beforeDisplayedColumns = value;
  }
  private _beforeDisplayedColumns: string[] = [];
  @Input() set afterDisplayedColumns(value: string[]) {
    this._afterDisplayedColumns = value;
  }
  private _afterDisplayedColumns: string[] = [];

  @Input() extraColumns: ExtraColumn[] = [];

  @Output() onToggleClick = new EventEmitter();
  @Output() onPageChange = new EventEmitter<PageEvent>();

  displayedColumns: string[] = [];
  dragEnabled = false;

  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatTable, { read: ViewContainerRef }) tableVcr!: ViewContainerRef;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ContentChild('extraColumnDefs') extraColumnDefs!: TemplateRef<any>;
  @ContentChildren(MatColumnDef) defsc!: QueryList<MatColumnDef>;
  @ViewChildren(MatColumnDef) defs!: QueryList<MatColumnDef>;

  rejectionReasonChoices = [
    'Offensive content',
    'Copyright issue in soundtrack',
    'Copyright issue in the video content',
    'Too long video',
    'Low video quality',
    'Other',
  ]

  statusEnum: typeof StatusEnum = StatusEnum;
  statusControls: Map<number, FormControl> = new Map<number, FormControl>();
  statusRejectionControls: Map<number, FormControl> = new Map<number, FormControl>();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

  }

  ngAfterContentChecked() {

  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(this.onPageChange);
    this.updateDisplayedColumns();
  }

  updateDisplayedColumns(){
    this.displayedColumns = [
      'id',
      'thumbnail',
      'name',
    ].concat(
      this._beforeDisplayedColumns
    ).concat([
      'uploadDate',
      'shareCount',
      'downloadCount',
      'linkCount',
      'play',
      'status',
    ]).concat(
      this._afterDisplayedColumns
    ).concat([
      'delete',
      'reorder'
    ]);
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

  handleToggleClick(){
    this.onToggleClick.emit();
  }

  getOrCreateStatusControl(id: number): FormControl {
    let ret: FormControl;
    if(this.statusControls.has(id)){
      ret = (this.statusControls.get(id) as FormControl);
    }else{
      ret = new FormControl();
      this.statusControls.set(id, ret);
    }
    return ret;
  }

  getOrCreateRejectionControl(id: number): FormControl {
    let ret: FormControl;
    if(this.statusRejectionControls.has(id)){
      ret = (this.statusRejectionControls.get(id) as FormControl);
    }else{
      ret = new FormControl();
      this.statusRejectionControls.set(id, ret);
    }
    return ret;
  }

  isAnythingSelected(id: number): boolean {
    return this.getOrCreateRejectionControl(id)?.value;
  }

  setStatus(id: number, status: StatusEnum) {
    this.getOrCreateStatusControl(id).setValue(status);
  }

  getStatus(id: number): StatusEnum {
    let ret = this.getOrCreateStatusControl(id).value;
    return ret ? ret : StatusEnum.Pending;
  }

  getColor(id: number){
    let status = this.getStatus(id);
    return status == StatusEnum.Rejected ? 'warn'
      : (status == StatusEnum.Active ? 'primary' : 'secondary');
  }

}
