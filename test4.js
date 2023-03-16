describe("my 4th test suite", function() {
    it("my 4th test case", function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
     cy.get("#alertbtn").click()
     cy.on('window:alert', (String) => {
        expect(String).to.equal('Hello , share this practice page and share your knowledge')
     })
     cy.get("#confirmbtn").click()
     cy.on('window:confirm', (string) => {
        expect(string).to.equal("Hello , Are you sure you want to confirm?")
     })
     cy.get("#opentab").invoke("removeAttr", "target").click()
     cy.url().should("include", "rahulshettyacademy")
     cy.go("back")
    })
})