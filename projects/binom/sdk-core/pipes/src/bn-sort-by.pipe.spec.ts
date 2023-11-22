import { TestBed } from '@angular/core/testing';
import { BnSortbyPipe } from './bn-sort-by.pipe';

describe('BnSortbyPipe', () => {
  let pipe: BnSortbyPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BnSortbyPipe]
    });
    pipe = TestBed.inject(BnSortbyPipe);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sort items by the specified field in ascending order', () => {
    const inputItems = [
      { id: 3, name: 'Charlie' },
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ];
    const sortedItems = pipe.transform(inputItems, 'name');
    expect(sortedItems).toEqual([
      { id: 2, name: 'Bob' },
      { id: 1, name: 'Alice' },
      { id: 3, name: 'Charlie' }
    ]);
  });

  it('should sort items in descending order if reverse is true', () => {
    const inputItems = [
      { id: 3, name: 'Charlie' },
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ];
    const sortedItems = pipe.transform(inputItems, 'name', true);
    expect(sortedItems).toEqual([
      { id: 3, name: 'Charlie' },
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ]);
  });

  it('should handle edge cases with empty or null items', () => {
    const inputItems1: any[] = [];
    const sortedItems1 = pipe.transform(inputItems1, 'name');
    expect(sortedItems1).toEqual([]);

  });


});
