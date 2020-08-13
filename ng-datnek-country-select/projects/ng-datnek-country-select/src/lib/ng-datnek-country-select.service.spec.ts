import {fakeAsync, inject, TestBed} from '@angular/core/testing';

import { NgDatnekCountrySelectService } from './ng-datnek-country-select.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Country} from './country.model';

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


  it('should getall country', fakeAsync(inject([NgDatnekCountrySelectService,
      HttpTestingController],
    (service: NgDatnekCountrySelectService, httpMock: HttpTestingController) => {

    // arrange
      const countriesDump = [
        {
          name: 'Afghanistan',
          code: 'AF',
          phoneCode: '+93'
        },
        {
          name: 'Albania',
          code: 'AL',
          phoneCode: '+355'
        },
        {
          name: 'Algeria',
          code: 'DZ',
          phoneCode: '+213'
        },
        {
          name: 'American Samoa',
          code: 'AS',
          phoneCode: '+1'
        },
        {
          name: 'Andorra',
          code: 'AD',
          phoneCode: '+376'
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

});
