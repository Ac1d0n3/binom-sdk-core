import { TestBed } from '@angular/core/testing';

import { ColorsUtilsService } from './colors-utils.service';

describe('ColorsUtilsService', () => {
  let service: ColorsUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorsUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
