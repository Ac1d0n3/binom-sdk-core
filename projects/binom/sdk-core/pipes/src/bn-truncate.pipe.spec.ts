import { TestBed } from '@angular/core/testing';
import { BnTruncatePipe } from './bn-truncate.pipe';

describe('BnTruncatePipe', () => {
  let pipe: BnTruncatePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BnTruncatePipe]
    });
    pipe = TestBed.inject(BnTruncatePipe);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should truncate the string to the specified limit', () => {
    const inputString = 'This is a sample text.';
    const truncatedString = pipe.transform(inputString, [10]);
    expect(truncatedString).toBe('This is a...');
  });

  it('should use the specified trail when truncating', () => {
    const inputString = 'This is a sample text.';
    const truncatedString = pipe.transform(inputString, [10, '***']);
    expect(truncatedString).toBe('This is a***');
  });

  it('should not truncate if the string length is within the limit', () => {
    const inputString = 'This is a sample text.';
    const truncatedString = pipe.transform(inputString, [30]);
    expect(truncatedString).toBe(inputString);
  });

  it('should handle edge cases with empty string', () => {
    const inputString = '';
    const truncatedString = pipe.transform(inputString, [10]);
    expect(truncatedString).toBe('');
  });

});
