import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDatnekMapComponent } from './ng-datnek-map.component';

describe('NgDatnekMapComponent', () => {
  let component: NgDatnekMapComponent;
  let fixture: ComponentFixture<NgDatnekMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDatnekMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDatnekMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
