import {async, ComponentFixture, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';

import { NgDatnekCountrySelectComponent } from './ng-datnek-country-select.component';
import {NgDatnekCountrySelectService} from './ng-datnek-country-select.service';
import {Country} from './country.model';
import {of} from 'rxjs';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('NgDatnekCountrySelectComponent', () => {
  let component: NgDatnekCountrySelectComponent;
  let fixture: ComponentFixture<NgDatnekCountrySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ NgDatnekCountrySelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDatnekCountrySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('refresh countries use async', fakeAsync(inject([NgDatnekCountrySelectService,
      HttpTestingController],
    async (service: NgDatnekCountrySelectService, httpMock: HttpTestingController) => {

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

      const spy = spyOn(service, 'getCountry').and.returnValue(of(countriesDump));

      // Act
      let countries: Country[] = [];
      service.getCountry().subscribe(res =>  {
        countries = res;
        // console.log('the countries is : ', countries);
      });

      await component.refreshCountryAsync();

      tick(1000);

      // Assert
      expect(component.countries.length).toBeGreaterThan(0);
      expect(component.countries).toEqual(countriesDump);

    })));

  it('refresh country', fakeAsync(inject([NgDatnekCountrySelectService],
    (service: NgDatnekCountrySelectService) => {

      // Act
      component.refreshCountry();

      // Assert
      expect(component.countries.length).toBeGreaterThan(0);

    })));


  it('init data use ngonit', fakeAsync(inject([NgDatnekCountrySelectService],
    (service: NgDatnekCountrySelectService) => {

      // Act
      component.ngOnInit();

      // Assert
      expect(component.countries.length).toBeGreaterThan(0);

  })));

});
