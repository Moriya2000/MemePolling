import { TestBed } from '@angular/core/testing';

import { BusinessDaysService } from './business-days.service';

describe('BusinessDaysService', () => {
  let service: BusinessDaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessDaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
