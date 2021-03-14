import { TestBed } from '@angular/core/testing';

import { DeliveryRoutesService } from './delivery-routes.service';

describe('DeliveryRoutesService', () => {
  let service: DeliveryRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
