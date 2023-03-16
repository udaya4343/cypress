class Homepage {
  getEditbox() {
    return cy.get(":nth-child(1) > .form-control");
  }
  getTwoWaytext() {
    return cy.get(":nth-child(4) > .ng-untouched");
  }
  getGenderName() {
    return cy.get("#exampleFormControlSelect1");
  }
  getEntrepreneurRadiobutton() {
    return cy.get("#inlineRadio3");
  }
  getShopTab() {
    return cy.get(":nth-child(2) > .nav-link");
  }
}
export default Homepage;
