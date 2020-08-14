import {fakeAsync, TestBed} from '@angular/core/testing';

import { NgDatnekPhoneService } from './ng-datnek-phone.service';
import {Country} from './models/country.model';

describe('NgDatnekPhoneService', () => {
  let service: NgDatnekPhoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgDatnekPhoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getall countries present in service',
    () => {

      // arrange
      let countries: Country[] = [];

      // Act
      countries = service.getData();

      // Assert
      expect(countries.length).toBeGreaterThan(0);

    });

});
