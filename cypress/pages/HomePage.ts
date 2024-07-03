class HomePage {
  link?: string;

  constructor(link?: string) {
    this.link = link;
  }

  banner() {
    return cy.get(`div.home-banner a[href="${this.getLink()}"]`)
  }

  elements() {
    return cy.xpath("//div[contains(@class, 'card-body')][contains(.,'Elements')]")
  }

  forms() {
    return cy.xpath("//div[contains(@class, 'card-body')][contains(.,'Forms')]")
  }

  alertsFramesWindows() {
    return cy.xpath("//div[contains(@class, 'card-body')][contains(.,'Alerts, Frame & Windows')]")
  }

  widgets() {
    return cy.xpath("//div[contains(@class, 'card-body')][contains(.,'Widgets')]")
  }

  interactions() {
    return cy.xpath("//div[contains(@class, 'card-body')][contains(.,'Interactions')]")
  }

  bookStore() {
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
