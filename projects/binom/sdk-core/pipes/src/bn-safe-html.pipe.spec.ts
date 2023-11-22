import { BnSafeHtmlPipe } from './bn-safe-html.pipe';

describe('BnSafeHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new BnSafeHtmlPipe();
    expect(pipe).toBeTruthy();
  });
});
