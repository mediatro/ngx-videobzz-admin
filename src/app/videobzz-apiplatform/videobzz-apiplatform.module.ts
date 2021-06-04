import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {AdminModule} from "../admin/admin.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,

    AdminModule
  ]
})
export class VideobzzApiplatformModule { }
