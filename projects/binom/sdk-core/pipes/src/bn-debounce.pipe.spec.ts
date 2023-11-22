import { BnDebouncePipe } from './bn-debounce.pipe';

describe('BnDebouncePipe', () => {
  it('create an instance', () => {
    const pipe = new BnDebouncePipe();
    expect(pipe).toBeTruthy();
  });
});
