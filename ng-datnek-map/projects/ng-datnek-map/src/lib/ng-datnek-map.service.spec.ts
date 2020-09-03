import { TestBed } from '@angular/core/testing';

import { NgDatnekMapService } from './ng-datnek-map.service';

describe('NgDatnekMapService', () => {
  let service: NgDatnekMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgDatnekMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
