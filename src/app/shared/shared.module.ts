import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import {FlexLayoutModule} from "@angular/flex-layout";



@NgModule({
  declarations: [
    ContainerComponent
  ],
  exports: [
    ContainerComponent
  ],
  imports: [
    CommonModule,

    FlexLayoutModule
  ]
})
export class SharedModule { }
