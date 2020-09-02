import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDatnekSelect2Component } from './ng-datnek-select2.component';

describe('NgDatnekSelect2Component', () => {
  let component: NgDatnekSelect2Component;
  let fixture: ComponentFixture<NgDatnekSelect2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDatnekSelect2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDatnekSelect2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
