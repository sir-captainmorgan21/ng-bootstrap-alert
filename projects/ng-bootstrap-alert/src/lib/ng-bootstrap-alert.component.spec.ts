import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapAlertComponent } from './ng-bootstrap-alert.component';

describe('NgBootstrapAlertComponent', () => {
  let component: NgBootstrapAlertComponent;
  let fixture: ComponentFixture<NgBootstrapAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBootstrapAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBootstrapAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
