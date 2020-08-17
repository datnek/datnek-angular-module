import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDatnekFileUploadComponent } from './ng-datnek-file-upload.component';

describe('NgDatnekFileUploadComponent', () => {
  let component: NgDatnekFileUploadComponent;
  let fixture: ComponentFixture<NgDatnekFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDatnekFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDatnekFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
