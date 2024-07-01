class HomePage {
  link?: string;

  constructor(link?: string) {
    this.link = link;
  }

  getBanner() {
    return cy.get(`div.home-banner a[href="${this.getLink()}"]`)
  }

  getElements() {
    return cy.xpath("//div[contains(@class, 'card-body')][contains(.,'Elements')]")
  }

  setLink(link: string) {
    return (this.link = link)
  }

  getLink() {
    return this.link
  }


}

export default HomePage
