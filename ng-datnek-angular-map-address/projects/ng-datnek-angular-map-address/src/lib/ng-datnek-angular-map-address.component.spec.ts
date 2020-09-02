import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDatnekAngularMapAddressComponent } from './ng-datnek-angular-map-address.component';

describe('NgDatnekAngularMapAddressComponent', () => {
  let component: NgDatnekAngularMapAddressComponent;
  let fixture: ComponentFixture<NgDatnekAngularMapAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDatnekAngularMapAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDatnekAngularMapAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
