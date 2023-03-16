describe("my 3rd test suite", function () {
  it("my 3rd test case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#checkBoxOption1")
      .wait(5000)
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    cy.get("#checkBoxOption1").wait(5000).uncheck().should("not.be.checked");
    cy.get('input[type="checkbox"]').wait(5000).check(["option2", "option3"]);

    cy.get("#dropdown-class-example")
      .select("option2")
      .should("have.value", "option2");

    cy.get("#autocomplete").type("ind");
    cy.get(".ui-menu-item div").each(($el, index, $lists) => {
      if ($el.text() == "India") {
        cy.wrap($el).click();
      }
    });
    cy.get("#displayed-text").type("aegonTargarean");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");

    cy.get("input[value = 'radio2']").click();
  });
  it("my 3rd test case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#checkBoxOption1")
      .wait(5000)
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    cy.get("#checkBoxOption1").wait(5000).uncheck().should("not.be.checked");
    cy.get('input[type="checkbox"]').wait(5000).check(["option2", "option3"]);

    cy.get("#dropdown-class-example")
      .select("option2")
      .should("have.value", "option2");

    cy.get("#autocomplete").type("ind");
    cy.get(".ui-menu-item div").each(($el, index, $lists) => {
      if ($el.text() == "India") {
        cy.wrap($el).click();
      }
    });
    cy.get("#displayed-text").type("aegonTargarean");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");

    cy.get("input[value = 'radio2']").click();
  });
});
