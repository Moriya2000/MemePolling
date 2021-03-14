import { TestBed } from '@angular/core/testing';

import { CarsTypesService } from './cars-types.service';

describe('CarsTypesService', () => {
  let service: CarsTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
