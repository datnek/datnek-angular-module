import { TestBed } from '@angular/core/testing';

import { NgDatnekAngularMapAddressService } from './ng-datnek-angular-map-address.service';

describe('NgDatnekAngularMapAddressService', () => {
  let service: NgDatnekAngularMapAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgDatnekAngularMapAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
