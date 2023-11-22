import { TestBed } from '@angular/core/testing';

import { BnJsonLoaderService } from './bn-json-loader.service';

describe('BnJsonLoaderService', () => {
  let service: BnJsonLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BnJsonLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
