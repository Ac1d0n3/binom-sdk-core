import { TestBed } from '@angular/core/testing';
import { BnSetDefaultPipe } from './bn-set-default.pipe';

describe('BnSetDefaultPipe', () => {
  let pipe: BnSetDefaultPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BnSetDefaultPipe]
    });
    pipe = TestBed.inject(BnSetDefaultPipe);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the original value if it is truthy', () => {
    const originalValue = 'Folder';
    const defaultValue = 'Default';
    const result = pipe.transform(originalValue, defaultValue);
    expect(result).toBe(originalValue);
  });

  it('should return the default value if the original value is falsy', () => {
    const originalValue = '';
    const defaultValue = 'Default';
    const result = pipe.transform(originalValue, defaultValue);
    expect(result).toBe(defaultValue);
  });

  it('should handle null or undefined original values', () => {
    const defaultValue = 'Default';
    const result1 = pipe.transform(null, defaultValue);
    const result2 = pipe.transform(undefined, defaultValue);
    expect(result1).toBe(defaultValue);
    expect(result2).toBe(defaultValue);
  });

  // Add more test cases as needed
});
