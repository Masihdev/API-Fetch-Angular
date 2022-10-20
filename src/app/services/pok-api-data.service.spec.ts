import { TestBed } from '@angular/core/testing';

import { PokApiDataService } from './pok-api-data.service';

describe('PokApiDataService', () => {
  let service: PokApiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokApiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
