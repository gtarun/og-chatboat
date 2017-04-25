import { OgMessageBotPage } from './app.po';

describe('og-message-bot App', () => {
  let page: OgMessageBotPage;

  beforeEach(() => {
    page = new OgMessageBotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
