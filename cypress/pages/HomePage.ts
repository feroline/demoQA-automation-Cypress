const linkBanner = "https://www.toolsqa.com/selenium-training/";
const selectorBanner = "div.home-banner";
class HomePage {
  getBanner() {
    return cy.get(selectorBanner);
  }

  getLinkBanner() {
    return cy.get(`${selectorBanner} a[href="${linkBanner}"]`);
  }

  getStringLinkBanner() {
    return linkBanner;
  }
}

export default HomePage;
