describe("my 5th test suite", function() {
    it("my 5th test case", function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#opentab").then(function(el) {
            const url = el.prop('href')
            cy.log(url);
            cy.visit("url")
        })
        
})
})