describe("my 5th test suite", function() {
    it("my 5th test case", function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("fieldset > #product > tbody > tr > td:nth-child(2)").each(($e1, index, $lists) => {
            const text = $e1.text()
            if(text.includes("Python")){
                cy.get("fieldset > #product > tbody > tr > td:nth-child(2)").eq(index).next().then(function(price){
                    const price_text = price.text()
                    expect(price_text).to.equal("25") 
                })
            }
        })

    })
})