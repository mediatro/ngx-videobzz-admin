import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminModule} from "../admin/admin.module";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,

    AdminModule,
  ]
})
export class VideobuzzDjangoApiModule { }
