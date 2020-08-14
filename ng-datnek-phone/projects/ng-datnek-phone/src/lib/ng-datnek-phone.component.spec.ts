import {async, ComponentFixture, fakeAsync, TestBed, inject} from '@angular/core/testing';

import { NgDatnekPhoneComponent } from './ng-datnek-phone.component';
import {NgDatnekPhoneService} from './ng-datnek-phone.service';

describe('NgDatnekPhoneComponent', () => {
  let component: NgDatnekPhoneComponent;
  let fixture: ComponentFixture<NgDatnekPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDatnekPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDatnekPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('refresh country', fakeAsync(inject([NgDatnekPhoneService],
    (service: NgDatnekPhoneService) => {

      // Act
      component.refreshCountry();

      // Assert
      expect(component.countries.length).toBeGreaterThan(0);

    })));


  it('init data use ngonit', fakeAsync(inject([NgDatnekPhoneService],
    (service: NgDatnekPhoneService) => {

      // Act
      component.ngOnInit();

      // Assert
      expect(component.countries.length).toBeGreaterThan(0);

    })));

});
