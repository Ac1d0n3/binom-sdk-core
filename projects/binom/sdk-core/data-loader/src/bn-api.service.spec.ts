import { TestBed } from '@angular/core/testing';

import { BnApiService } from './bn-api.service';

describe('BnApiService', () => {
  let service: BnApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BnApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
