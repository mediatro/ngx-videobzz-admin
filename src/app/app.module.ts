import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {AdminModule} from "./admin/admin.module";
import {RestApiService} from "./videobuzz-django-api/services/rest-api.service";
import {VideobuzzDjangoApiModule} from "./videobuzz-django-api/videobuzz-django-api.module";
import {ApiplatformOpenapiService} from "./videobzz-apiplatform/services/apiplatform-openapi.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    SharedModule,
    AdminModule,
    VideobuzzDjangoApiModule,
  ],
  providers: [
    {provide: 'videobzz.api.host', useValue: 'http://127.0.0.1:8000/api/'},
    //{provide: 'videobzz.api.host', useValue: 'http://apiplatform.videobzz.com/api/'},
    {provide: 'admin.api.service', useClass: ApiplatformOpenapiService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
