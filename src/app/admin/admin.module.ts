import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { ContributorAssetsPageComponent } from './components/contributor-assets-page/contributor-assets-page.component';
import { VbzAssetsPageComponent } from './components/vbz-assets-page/vbz-assets-page.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { AdsManagerPageComponent } from './components/ads-manager-page/ads-manager-page.component';
import {AppRoutingModule} from "../app-routing.module";
import {SharedModule} from "../shared/shared.module";
import {AssetsModule} from "./assets/assets.module";
import {AdsModule} from "./ads/ads.module";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    LayoutComponent,
    ContributorAssetsPageComponent,
    VbzAssetsPageComponent,
    AdsManagerPageComponent
  ],
  imports: [
    CommonModule,

    MatToolbarModule,
    MatButtonModule,

    AppRoutingModule,
    SharedModule,

    AssetsModule,
    AdsModule,
    FlexLayoutModule,
  ]
})
export class AdminModule { }
