import { KickstarterPage } from './app.po';

describe('kickstarter App', () => {
  let page: KickstarterPage;

  beforeEach(() => {
    page = new KickstarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
