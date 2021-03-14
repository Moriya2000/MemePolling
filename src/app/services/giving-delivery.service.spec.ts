import { TestBed } from '@angular/core/testing';

import { GivingDeliveryService } from './giving-delivery.service';

describe('GivingDeliveryService', () => {
  let service: GivingDeliveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GivingDeliveryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
