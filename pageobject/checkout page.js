class checkoutpage {
  getcountry() {
    return cy.get("#country");
  }
  getterms() {
    return cy.get("input[type= 'checkbox'] ");
  }
  getselect() {
    return cy.get(".suggestions");
  }
  getpurchase() {
    return cy.get(".ng-untouched > .btn");
  }
  getalert() {
    return cy.get(".alert");
  }
}
export default checkoutpage;
