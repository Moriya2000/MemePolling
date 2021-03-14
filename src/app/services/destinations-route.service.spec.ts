import { TestBed } from '@angular/core/testing';

import { DestinationsRouteService } from './destinations-route.service';

describe('DestinationsRouteService', () => {
  let service: DestinationsRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinationsRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
