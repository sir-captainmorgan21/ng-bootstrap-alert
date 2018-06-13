import { TestBed, inject } from '@angular/core/testing';

import { NgBootstrapAlertService } from './ng-bootstrap-alert.service';

describe('NgBootstrapAlertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgBootstrapAlertService]
    });
  });

  it('should be created', inject([NgBootstrapAlertService], (service: NgBootstrapAlertService) => {
    expect(service).toBeTruthy();
  }));
});
