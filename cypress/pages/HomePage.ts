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

  getForms() {
    return cy.xpath("//div[contains(@class, 'card-body')][contains(.,'Forms')]")
  }

  getAlertsFramesWindows() {
    return cy.xpath("//div[contains(@class, 'card-body')][contains(.,'Alerts, Frame & Windows')]")
  }

  getWidgets() {
    return cy.xpath("//div[contains(@class, 'card-body')][contains(.,'Widgets')]")
  }

  getInteractions() {
    return cy.xpath("//div[contains(@class, 'card-body')][contains(.,'Interactions')]")
  }

  getBookStore() {
    return cy.xpath("//div[contains(@class, 'card-body')][contains(.,'Book Store Application')]")
  }

  setLink(link: string) {
    return (this.link = link)
  }

  getLink() {
    return this.link
  }


}

export default HomePage
