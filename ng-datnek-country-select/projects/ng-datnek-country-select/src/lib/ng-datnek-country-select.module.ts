import { NgModule } from '@angular/core';
import { NgDatnekCountrySelectComponent } from './ng-datnek-country-select.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [NgDatnekCountrySelectComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [NgDatnekCountrySelectComponent]
})
export class NgDatnekCountrySelectModule { }
