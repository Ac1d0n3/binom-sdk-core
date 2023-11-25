import { TestBed } from '@angular/core/testing';

import { BnHelpService } from './bn-help.service';

describe('BnHelpService', () => {
  let service: BnHelpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BnHelpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
