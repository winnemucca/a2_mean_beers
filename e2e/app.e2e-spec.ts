import { MeanApp2Page } from './app.po';

describe('mean-app2 App', function() {
  let page: MeanApp2Page;

  beforeEach(() => {
    page = new MeanApp2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
