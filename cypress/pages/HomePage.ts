class HomePage {
  link?: string;

  constructor(link?: string) {
    this.link = link;
  }

  getBanner() {
    return cy.get(`div.home-banner a[href="${this.getLink()}"]`);
  }

  setLink(link: string) {
    return (this.link = link);
  }

  getLink() {
    return this.link;
  }
}

export default HomePage;
