import { NgModule } from '@angular/core';
import { NgDatnekFileUploadComponent } from './ng-datnek-file-upload.component';
import {CommonModule} from '@angular/common';
import {NgxFileDropModule} from 'ngx-file-drop';



@NgModule({
  declarations: [NgDatnekFileUploadComponent],
  imports: [
    CommonModule,
    NgxFileDropModule
  ],
  exports: [NgDatnekFileUploadComponent]
})
export class NgDatnekFileUploadModule { }
