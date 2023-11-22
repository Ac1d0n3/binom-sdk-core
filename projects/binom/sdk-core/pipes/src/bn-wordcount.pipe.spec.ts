import { TestBed } from '@angular/core/testing';
import { BnWordcountPipe } from './bn-wordcount.pipe';

describe('BnWordcountPipe', () => {
  let pipe: BnWordcountPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BnWordcountPipe]
    });
    pipe = TestBed.inject(BnWordcountPipe);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the correct word count for a string', () => {
    const inputString = 'This is a sample text.';
    const wordCount = pipe.transform(inputString);
    expect(wordCount).toBe(5);
  });

  it('should return 0 for an empty string', () => {
    const inputString = '';
    const wordCount = pipe.transform(inputString);
    expect(wordCount).toBe(0);
  });

  it('should return 0 for a string with only spaces', () => {
    const inputString = '      ';
    const wordCount = pipe.transform(inputString);
    expect(wordCount).toBe(0);
  });

  it('should handle leading and trailing spaces', () => {
    const inputString = '   This is a sample text.   ';
    const wordCount = pipe.transform(inputString);
    expect(wordCount).toBe(5);
  });

  // Add more test cases as needed
});
