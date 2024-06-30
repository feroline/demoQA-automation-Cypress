class HomePage {
  linkBanner?: string;

  constructor(linkBanner?: string) {
    this.linkBanner = linkBanner;
  }

  getBanner() {
    return cy.get(`div.home-banner a[href="${this.getLinkBanner()}"]`);
  }

  setLinkBanner(linkBanner: string) {
    return (this.linkBanner = linkBanner);
  }

  getLinkBanner() {
    return this.linkBanner;
  }
}

export default HomePage;
