import { CollageFinderFrontendPage } from './app.po';

describe('collage-finder-frontend App', function() {
  let page: CollageFinderFrontendPage;

  beforeEach(() => {
    page = new CollageFinderFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
