import { TestBed } from '@angular/core/testing';
import { BnSearchFilterPipe } from './bn-search-filter.pipe';

describe('BnSearchFilterPipe', () => {
  let pipe: BnSearchFilterPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BnSearchFilterPipe]
    });
    pipe = TestBed.inject(BnSearchFilterPipe);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter items based on the specified field and value', () => {
    const inputItems = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' }
    ];

    const filteredItems = pipe.transform(inputItems, 'name', 'Bob');
    expect(filteredItems).toEqual([{ id: 2, name: 'Bob' }]);
  });

  it('should handle case-insensitive filtering', () => {
    const inputItems = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' }
    ];

    const filteredItems = pipe.transform(inputItems, 'name', 'BOB');
    expect(filteredItems).toEqual([{ id: 2, name: 'Bob' }]);
  });

  it('should handle edge cases with empty or null items', () => {
    const inputItems1: any[] = [];
    const filteredItems1 = pipe.transform(inputItems1, 'name', 'Bob');
    expect(filteredItems1).toEqual([]);

   
  });

  it('should handle edge cases with empty or null value', () => {
    const inputItems = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' }
    ];

    const filteredItems1 = pipe.transform(inputItems, 'name', '');
   
    expect(filteredItems1).toEqual(inputItems);

  });

});
