describe("my 5th test suite", function() {
    it("my 5th test case", function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get(".mouse-hover-content").invoke("show")
        cy.contains('Top').click()
        cy.url().should("includes", "top")
    })
})