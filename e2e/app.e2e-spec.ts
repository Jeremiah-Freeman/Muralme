import { MuralmePage } from './app.po';

describe('muralme App', () => {
  let page: MuralmePage;

  beforeEach(() => {
    page = new MuralmePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
