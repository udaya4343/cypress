import Homepage from "../page object/home page";
import Productpage from "../page object/product page";
import protocommerce from "../page object/Protocommerce page";
import checkoutpage from "../page object/checkout page";
describe("my 9th test case", function () {
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it(" my 9th test case", function () {
    const Home = new Homepage();
    const product = new Productpage();
    const proto = new protocommerce();
    const check = new checkoutpage();
    cy.visit(Cypress.env("url") + "angularpractice/");
    Home.getEditbox().type(this.data.Name);
    Home.getGenderName().select(this.data.Gender);
    Home.getTwoWaytext().should("have.value", this.data.Name);
    cy.get(":nth-child(1) > .form-control").should("have.attr", "minlength");
    Home.getEntrepreneurRadiobutton().should("be.disabled");
    cy.debug();
    Home.getShopTab().click();
    this.data.productName.forEach((element) => {
      cy.selectproduct(element);
    });

    product.getcheckout().click();
    var sum = 0;
    cy.get("tr td:nth-child(4) strong")
      .each(($el, index, $list) => {
        const amount = $el.text();
        var res = amount.split(" ");
        res = res[1].trim();
        sum = Number(sum) + Number(res);
      })
      .then((element) => {
        cy.log(sum);
      });
    cy.get("h3 strong").then((element) => {
      const total = element.text();
      var totalA = total.split(" ");
      totalA = totalA[1].trim();
      expect(sum).to.equal(Number(totalA));
    });

    proto.getcheck().click();
    Cypress.config("defaultCommandTimeout", 8000);
    check.getcountry().type("Ind").wait(2000);
    check.getselect().contains("India").click();
    check.getterms().click({ force: true }).wait(2000);
    check.getpurchase().click();
    check.getalert().then(function (element) {
      const text = element.text();
      expect(text.includes("Success")).to.be.true;
    });
  });
});
