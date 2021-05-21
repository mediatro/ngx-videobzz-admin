import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributorAssetsComponent } from './components/contributor-assets/contributor-assets.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import { SplitTableCellComponent } from './components/split-table-cell/split-table-cell.component';
import {MatDividerModule} from "@angular/material/divider";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { FilterChoiceComponent } from './components/filter-choice/filter-choice.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { FiltersPanelComponent } from './components/filters-panel/filters-panel.component';
import {SharedModule} from "../../shared/shared.module";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {MatBadgeModule} from "@angular/material/badge";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MdePopoverModule} from "@material-extended/mde";
import {MatCardModule} from "@angular/material/card";
import { AlbumSeriesEditorComponent } from './components/album-series-editor/album-series-editor.component';
import { TotalPanelComponent } from './components/total-panel/total-panel.component';
import { AssetsDatagridComponent } from './components/assets-datagrid/assets-datagrid.component';
import {AppRoutingModule} from "../../app-routing.module";
import { SeriesDatagridComponent } from './components/series-datagrid/series-datagrid.component';
import { NewSeriesDialogComponent } from './components/new-series-dialog/new-series-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatMenuModule} from "@angular/material/menu";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";



@NgModule({
  declarations: [


    ContributorAssetsComponent,
      SplitTableCellComponent,
      FilterChoiceComponent,
      FiltersPanelComponent,
      AlbumSeriesEditorComponent,
      TotalPanelComponent,
      AssetsDatagridComponent,
      SeriesDatagridComponent,
      NewSeriesDialogComponent
  ],
  exports: [
    ContributorAssetsComponent
  ],
  imports: [
    CommonModule,

    FlexLayoutModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatChipsModule,
    MatAutocompleteModule,
    SharedModule,
    MatDatepickerModule,
    MatCardModule,
    MatBadgeModule,
    MatListModule,

    MatMomentDateModule,
    DragDropModule,
    MdePopoverModule,

    AppRoutingModule,
    MatDialogModule,
    MatMenuModule,
    MatSelectModule,
  ]
})
export class AssetsModule { }
