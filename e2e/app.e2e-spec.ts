import { BaseltechPage } from './app.po';

describe('baseltech App', function() {
  let page: BaseltechPage;

  beforeEach(() => {
    page = new BaseltechPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
