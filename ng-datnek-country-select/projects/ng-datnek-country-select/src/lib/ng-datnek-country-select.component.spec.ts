import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDatnekCountrySelectComponent } from './ng-datnek-country-select.component';

describe('NgDatnekCountrySelectComponent', () => {
  let component: NgDatnekCountrySelectComponent;
  let fixture: ComponentFixture<NgDatnekCountrySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
});
