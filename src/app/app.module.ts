import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {AdminModule} from "./admin/admin.module";
import {RestApiService} from "./videobuzz-django-api/services/rest-api.service";
import {VideobuzzDjangoApiModule} from "./videobuzz-django-api/videobuzz-django-api.module";

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
    {provide: 'videobuzz.api.host', useValue: 'https://api.videobzz.com/gallery/'},
    {provide: 'videobuzz.api.host.staging', useValue: 'https://api-stag.videobzz.com/gallery/'},
    {provide: 'admin.api.service', useClass: RestApiService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
