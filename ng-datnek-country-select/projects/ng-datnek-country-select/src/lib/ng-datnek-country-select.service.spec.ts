import {fakeAsync, inject, TestBed} from '@angular/core/testing';

import { NgDatnekCountrySelectService } from './ng-datnek-country-select.service';
import {Country} from './country.model';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('NgDatnekCountrySelectService', () => {
  // let service: NgDatnekCountrySelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NgDatnekCountrySelectService]
    });
    // service = TestBed.inject(NgDatnekCountrySelectService);
  });

  it('should be created', inject([NgDatnekCountrySelectService], (service: NgDatnekCountrySelectService) => {
    expect(service).toBeTruthy();
  }));


  it('should getall countries use httpclient', fakeAsync(inject([NgDatnekCountrySelectService,
      HttpTestingController],
    (service: NgDatnekCountrySelectService, httpMock: HttpTestingController) => {

    // arrange
      const countriesDump = [
        {
          name: 'Afghanistan',
          code: 'AF',
          phone_code: '+93'
        },
        {
          name: 'Albania',
          code: 'AL',
          phone_code: '+355'
        },
        {
          name: 'Algeria',
          code: 'DZ',
          phone_code: '+213'
        },
        {
          name: 'American Samoa',
          code: 'AS',
          phone_code: '+1'
        },
        {
          name: 'Andorra',
          code: 'AD',
          phone_code: '+376'
        }
      ];

    // Act
      let countries: Country[] = [];
      service.getCountry().subscribe(res =>  {
      countries = res;
     // console.log('the countries is : ', countries);
    });

      // http mock
      const req = httpMock.expectOne(service.url);
      req.flush(countriesDump);

    // Assert
      expect(req.request.method).toBe('GET');
      expect(countries.length).toBeGreaterThan(0);
      expect(countries).toEqual(countriesDump);

  })));


  it('should getall countries present in service', fakeAsync(inject([NgDatnekCountrySelectService],
    (service: NgDatnekCountrySelectService) => {

      // arrange
      let countries: Country[] = [];

      // Act
      countries = service.getData();

      // Assert
      expect(countries.length).toBeGreaterThan(0);

    })));

});
