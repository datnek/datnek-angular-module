import {async, ComponentFixture, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';

import { NgDatnekCountrySelectComponent } from './ng-datnek-country-select.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {NgDatnekCountrySelectService} from './ng-datnek-country-select.service';
import {Country} from './country.model';
import {of} from 'rxjs';

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



  it('should getall country in component', fakeAsync(inject([NgDatnekCountrySelectService,
      HttpTestingController],
    async (service: NgDatnekCountrySelectService, httpMock: HttpTestingController) => {

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

      const spy = spyOn(service, 'getCountry').and.returnValue(of(countriesDump));

      // Act
      let countries: Country[] = [];
      service.getCountry().subscribe(res =>  {
        countries = res;
        // console.log('the countries is : ', countries);
      });

      await component.ngOnInit();

      tick(1000);

      // Assert
      expect(component.countries.length).toBeGreaterThan(0);
      expect(component.countries).toEqual(countriesDump);

    })));
});
