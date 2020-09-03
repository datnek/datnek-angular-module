import { NgModule } from '@angular/core';
import { NgDatnekMapComponent } from './ng-datnek-map.component';
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [NgDatnekMapComponent],
  imports: [
    CommonModule
  ],
  exports: [NgDatnekMapComponent]
})
export class NgDatnekMapModule { }
