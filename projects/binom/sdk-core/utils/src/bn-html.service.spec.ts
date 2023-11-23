import { TestBed } from '@angular/core/testing';

import { BnHTMLService } from './bn-html.service';

describe('BnHTMLService', () => {
  let service: BnHTMLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BnHTMLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
