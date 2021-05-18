import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContributorAssetsPageComponent} from "./admin/components/contributor-assets-page/contributor-assets-page.component";
import {VbzAssetsPageComponent} from "./admin/components/vbz-assets-page/vbz-assets-page.component";
import {AdsManagerPageComponent} from "./admin/components/ads-manager-page/ads-manager-page.component";
import {LayoutComponent} from "./admin/components/layout/layout.component";

const routes: Routes = [
  {path: '', redirectTo: 'admin', pathMatch: 'full'},
  {path: 'admin', component: LayoutComponent, children: [
      {path: '', redirectTo: 'contributor-assets', pathMatch: 'full'},
      {path: 'contributor-assets', component: ContributorAssetsPageComponent},
      {path: 'vbz-assets', component: VbzAssetsPageComponent},
      {path: 'ads-manager', component: AdsManagerPageComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
