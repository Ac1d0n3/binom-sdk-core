import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ChangeDetectorRef, NgZone } from '@angular/core';
import { BnDebouncePipe } from './bn-debounce.pipe';

describe('BnDebouncePipe', () => {
  let pipe: BnDebouncePipe;
  let changeDetector: ChangeDetectorRef;
  let zone: NgZone;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BnDebouncePipe, ChangeDetectorRef, NgZone]
    });
    pipe = TestBed.inject(BnDebouncePipe);
    changeDetector = TestBed.inject(ChangeDetectorRef);
    zone = TestBed.inject(NgZone);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should not debounce the initial value', () => {
    const input = 'Initial Value';
    const output = pipe.transform(input);
    expect(output).toBe(input);
  });

  it('should debounce subsequent values', fakeAsync(() => {
    const input1 = 'Value 1';
    const input2 = 'Value 2';

    const output1 = pipe.transform(input1);
    expect(output1).toBe(input1);

    const output2 = pipe.transform(input2, 1000);
    expect(output2).toBe(input1);

    tick(1000);

    const finalOutput = pipe.transform(input2, 1000);
    expect(finalOutput).toBe(input2);
  }));

  it('should handle null or undefined input', fakeAsync(() => {
    const output1 = pipe.transform(null, 500);
    const output2 = pipe.transform(undefined, 500);

    expect(output1).toBeNull();
    expect(output2).toBeUndefined();
  }));

  it('should run change detection after debounce', fakeAsync(() => {
    spyOn(changeDetector, 'markForCheck').and.callThrough();

    const input = 'Debounced Value';

    pipe.transform(input, 500);
    tick(500);

    expect(changeDetector.markForCheck).toHaveBeenCalled();
  }));

  it('should run change detection inside NgZone after debounce', fakeAsync(() => {
    spyOn(zone, 'run').and.callThrough();

    const input = 'Debounced Value';

    pipe.transform(input, 500);
    tick(500);

    expect(zone.run).toHaveBeenCalled();
  }));

  // Add more test cases as needed
});
