import { TestBed } from '@angular/core/testing';

import { DeliveryUrgencyService } from './delivery-urgency.service';

describe('DeliveryUrgencyService', () => {
  let service: DeliveryUrgencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryUrgencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
