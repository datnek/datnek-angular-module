import { NgModule } from '@angular/core';
import { NgDatnekPhoneComponent } from './ng-datnek-phone.component';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [NgDatnekPhoneComponent],
  imports: [
    CommonModule
  ],
  exports: [NgDatnekPhoneComponent]
})
export class NgDatnekPhoneModule { }
