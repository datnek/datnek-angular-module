import { NgModule } from '@angular/core';
import { NgDatnekAngularMapAddressComponent } from './ng-datnek-angular-map-address.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {AgmCoreModule} from '@agm/core';



@NgModule({
  declarations: [NgDatnekAngularMapAddressComponent],
  imports: [ModalModule.forRoot(),  AgmCoreModule.forRoot({
    apiKey: 'AIzaSyAzSnXXXXXXXXXXXXXXXXXSZGGWU',
    libraries: ['places']
  })],
  exports: [NgDatnekAngularMapAddressComponent]
})
export class NgDatnekAngularMapAddressModule { }
