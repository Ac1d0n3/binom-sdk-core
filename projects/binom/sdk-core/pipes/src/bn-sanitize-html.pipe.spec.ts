import { BnSanitizeHtmlPipe } from './bn-sanitize-html.pipe';

describe('BnSanitizeHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new BnSanitizeHtmlPipe();
    expect(pipe).toBeTruthy();
  });
});
