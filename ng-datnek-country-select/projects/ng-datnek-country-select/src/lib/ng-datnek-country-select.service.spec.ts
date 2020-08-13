import { TestBed } from '@angular/core/testing';

import { NgDatnekCountrySelectService } from './ng-datnek-country-select.service';

describe('NgDatnekCountrySelectService', () => {
  let service: NgDatnekCountrySelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgDatnekCountrySelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
