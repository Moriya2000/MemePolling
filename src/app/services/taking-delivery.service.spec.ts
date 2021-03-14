import { TestBed } from '@angular/core/testing';

import { TakingDeliveryService } from './taking-delivery.service';

describe('TakingDeliveryService', () => {
  let service: TakingDeliveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakingDeliveryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
