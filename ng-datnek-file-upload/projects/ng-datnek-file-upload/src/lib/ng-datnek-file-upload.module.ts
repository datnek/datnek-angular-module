import { NgModule } from '@angular/core';
import { NgDatnekFileUploadComponent } from './ng-datnek-file-upload.component';
import {NgxFileDropModule} from 'ngx-file-drop';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [NgDatnekFileUploadComponent],
  imports: [
    NgxFileDropModule,
    CommonModule
  ],
  exports: [NgDatnekFileUploadComponent]
})
export class NgDatnekFileUploadModule { }
