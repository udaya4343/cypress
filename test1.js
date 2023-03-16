describe ('my first test suite', function()
{
    it('my first test case', function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.wait(2000)
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').find('.product').should('have.length', 4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').wait(2000).click()
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const vegitable = $el.find('h4.product-name').text()
            if(vegitable.includes('Cashews'))
            {
                cy.wrap($el).find('button').click()
            }
        }) 
        cy.get('.brand').should('have.text', 'GREENKART')
        cy.get ('.brand').then(function(logoElements) {
            cy.log(logoElements.text())
        })
    }
)})