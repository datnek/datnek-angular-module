import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgDatnekSelect2Module} from '../../../ng-datnek-select2/projects/ng-datnek-select2/src/lib/ng-datnek-select2.module';
import {HttpClientModule} from '@angular/common/http';
import {NgDatnekPhoneModule} from '../../../ng-datnek-phone/projects/ng-datnek-phone/src/lib/ng-datnek-phone.module';
import {NgDatnekCountrySelectModule} from '../../../ng-datnek-country-select/projects/ng-datnek-country-select/src/lib/ng-datnek-country-select.module';
import {NgDatnekFileUploadModule} from '../../../ng-datnek-file-upload/projects/ng-datnek-file-upload/src/lib/ng-datnek-file-upload.module';
import {AgmCoreModule} from '@agm/core';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgDatnekSelect2Module,
    NgDatnekPhoneModule,
    NgDatnekCountrySelectModule,
    NgDatnekFileUploadModule,
    AgmCoreModule.forRoot({
      apiKey: environment.agmCore.apiKey,
      libraries: environment.agmCore.libraries
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
