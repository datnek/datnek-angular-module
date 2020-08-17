import { TestBed } from '@angular/core/testing';

import { NgDatnekFileUploadService } from './ng-datnek-file-upload.service';

describe('NgDatnekFileUploadService', () => {
  let service: NgDatnekFileUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgDatnekFileUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
