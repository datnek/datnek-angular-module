import { NgModule } from '@angular/core';
import { NgDatnekPhoneComponent } from './ng-datnek-phone.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [NgDatnekPhoneComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NgDatnekPhoneComponent]
})
export class NgDatnekPhoneModule { }
