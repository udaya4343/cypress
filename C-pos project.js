describe("my test suite", function () {
  it("my test case", function () {
    cy.visit("https://portal.cpos.dev/login");
    cy.get("#email-address").type("juniorrecruiter@dev.vto.group");
    cy.get("#password").type("juniorrecruiter@123");
    cy.get(".col-lg-5 > .mat-focus-indicator > .mat-button-wrapper").click();
    cy.wait(5000);
    cy.get(".sidebar-blk").find("#m01").click();
    cy.wait(5000);
    cy.get("#btn-0").click();
    cy.get(".icon-container-blk > .row").contains("Lead").click();
    cy.get(".container > .text-right").contains("Next").click();
    cy.get(".mat-form-field-infix > #firstname").type("CJS", { force: true });
    cy.get('.modal-body-content-custom > [role="presentation"]')
      .find("#lastname")
      .type("charlie");
    cy.get("#dbaName").type("udaya");
    cy.get(
      ' [style="width: 552px; position: absolute; left: 213px; top: 144px;"] > :nth-child(1)'
    ).click();
    cy.get("#french").click();
    cy.get(
      "#franchise > .mat-checkbox-layout > .mat-checkbox-inner-container"
    ).click();
    cy.get(
      "#sourceDropdown > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow"
    ).click();
    cy.wait(3000);
    cy.get("#sourceOpt0 > .mat-option-text").click();
    cy.get("#workphone0").type("9047134343");
    cy.get("#workmail0").type("broutimmebeije-7063@yopmail.com");
    cy.get(
      "#priorityDropdown > .mat-select-trigger > .mat-select-arrow-wrapper"
    ).click();
    cy.wait(2000);
    cy.get("#priorityOpt3 > .mat-option-text").click();
    cy.get(
      "#sameAsCompanyName > .mat-checkbox-layout > .mat-checkbox-inner-container"
    ).click();

    cy.get(
      "#socialMediaDropdown > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow"
    ).click();
    cy.get("#socialMediaOp1 > .mat-option-text").click();
    cy.get("#socialMedia0").type("udaya_cjs");
    cy.get("#jobTitle").type("Manager");
    cy.get(
      "#previousProviderIdDropdown > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow"
    ).click();
    cy.get("#previousProviderId3 > .mat-option-text").click();
    cy.get("#value").type("500");
    cy.wait(2000);
    cy.get("#richtexteditor_1345489392_0_rte-edit-view > p").type(
      "hello guy's"
    );
    cy.get(".ng-star-inserted > #save > .mat-button-wrapper").click();
  });
});
