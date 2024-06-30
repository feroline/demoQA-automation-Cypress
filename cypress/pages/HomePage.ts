class HomePage {
  link?: string;

  constructor(link?: string) {
    this.link = link;
  }

  getBanner() {
    return cy.get(`div.home-banner a[href="${this.getLink()}"]`)
  }

  getElements() {
    return cy.get('.category-cards > :nth-child(1)')
  }

  setLink(link: string) {
    return (this.link = link)
  }

  getLink() {
    return this.link
  }


}

export default HomePage
