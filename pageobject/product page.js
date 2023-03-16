class Productpage {
  getProduct() {
    return cy.get(".col-lg-9 > .row >");
  }
  getcheckout() {
    return cy.get("#navbarResponsive > .navbar-nav > .nav-item > .nav-link");
  }
}
export default Productpage;
