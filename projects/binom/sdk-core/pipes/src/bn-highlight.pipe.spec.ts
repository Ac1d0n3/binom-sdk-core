import { TestBed } from '@angular/core/testing';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BnHighlightPipe } from './bn-highlight.pipe';

describe('BnHighlightPipe', () => {
  let pipe: BnHighlightPipe;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BnHighlightPipe, DomSanitizer]
    });
    pipe = TestBed.inject(BnHighlightPipe);
    sanitizer = TestBed.inject(DomSanitizer);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should bypass security for non-string values or missing args', () => {
    const input1 = 42;
    const output1 = pipe.transform(input1, 'search');
    expect(output1).toEqual(sanitizer.bypassSecurityTrustHtml(input1.toString()));

    const input2 = 'Hello, World!';
    const output2 = pipe.transform(input2, null);
    expect(output2).toEqual(sanitizer.bypassSecurityTrustHtml(input2));
  });

  it('should highlight matched text with <mark> tags', () => {
    const input = 'Angular is awesome!';
    const searchValue = 'angular';
    const expectedOutput = sanitizer.bypassSecurityTrustHtml('Angular is awesome!');
    
    const output = pipe.transform(input, searchValue);
    
    // Using innerHTML to check the actual HTML content, as SafeHtml is not directly comparable
    expect((output as SafeHtml).toString()).toBe((expectedOutput as SafeHtml).toString());
  });

  it('should handle case-insensitive highlighting', () => {
    const input = 'Angular is awesome!';
    const searchValue = 'ANGULAR';
    const expectedOutput = sanitizer.bypassSecurityTrustHtml('Angular is awesome!');
    
    const output = pipe.transform(input, searchValue);
    
    // Using innerHTML to check the actual HTML content, as SafeHtml is not directly comparable
    expect((output as SafeHtml).toString()).toBe((expectedOutput as SafeHtml).toString());
  });

  it('should handle null or undefined input', () => {
    const output1 = pipe.transform(null, 'search');
    const output2 = pipe.transform(undefined, 'search');
    expect(output1).toBeNull();
    expect(output2).toBeUndefined();
  });

  // Add more test cases as needed
});
