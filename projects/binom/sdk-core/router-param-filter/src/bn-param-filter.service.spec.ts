import { TestBed } from '@angular/core/testing';

import { BnParamFilterService } from './bn-param-filter.service';

describe('BnParamFilterService', () => {
  let service: BnParamFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BnParamFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
