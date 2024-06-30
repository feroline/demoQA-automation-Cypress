const selectorBanner = "div.home-banner";
class HomePage {
  linkBanner?: string;

  constructor(linkBanner?: string) {
    this.linkBanner = linkBanner;
  }

  getBanner() {
    return cy.get(`${selectorBanner} a[href="${this.getLinkBanner()}"]`);
  }

  setLinkBanner(linkBanner: string) {
    return (this.linkBanner = linkBanner);
  }

  getLinkBanner() {
    return this.linkBanner;
  }
}

export default HomePage;
