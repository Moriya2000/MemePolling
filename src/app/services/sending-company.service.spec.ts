import { TestBed } from '@angular/core/testing';

import { SendingCompanyService } from './sending-company.service';

describe('SendingCompanyService', () => {
  let service: SendingCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendingCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
