import { NgModule } from '@angular/core';
import { NgDatnekCountrySelectComponent } from './ng-datnek-country-select.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";




@NgModule({
  declarations: [NgDatnekCountrySelectComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [NgDatnekCountrySelectComponent]
})
export class NgDatnekCountrySelectModule { }
