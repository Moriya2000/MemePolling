import { TestBed } from '@angular/core/testing';

import { CompanyBankDetailsService } from './company-bank-details.service';

describe('CompanyBankDetailsService', () => {
  let service: CompanyBankDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyBankDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
