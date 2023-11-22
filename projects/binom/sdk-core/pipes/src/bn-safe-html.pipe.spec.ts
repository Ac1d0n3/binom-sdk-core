import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { BnSafeHtmlPipe } from './bn-safe-html.pipe';
import { SecurityContext } from '@angular/core';

describe('BnSafeHtmlPipe', () => {
  let pipe: BnSafeHtmlPipe;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BnSafeHtmlPipe, DomSanitizer]
    });
    pipe = TestBed.inject(BnSafeHtmlPipe);
    sanitizer = TestBed.inject(DomSanitizer);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sanitize HTML content using DomSanitizer', () => {
    const inputHtml = '<div>Hello, <strong>World</strong>!</div>';
    const sanitizedHtml = pipe.transform(inputHtml);
    const expectedSanitizedHtml = sanitizer.sanitize(SecurityContext.HTML, inputHtml);
    expect(sanitizedHtml).toBe(expectedSanitizedHtml);
  });


});
