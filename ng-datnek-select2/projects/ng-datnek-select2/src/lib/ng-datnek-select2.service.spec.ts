import { TestBed } from '@angular/core/testing';

import { NgDatnekSelect2Service } from './ng-datnek-select2.service';

describe('NgDatnekSelect2Service', () => {
  let service: NgDatnekSelect2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgDatnekSelect2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
