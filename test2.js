describe ('my first test suite', function()
{
    it('my first test case', function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const vegitable = $el.find('h4.product-name').text()
            if(vegitable.includes('Cashews'))
            {
                cy.wrap($el).find('button').click()
            }
        }) 
       cy.get('.cart-icon > img').click()
       cy.contains("PROCEED TO CHECKOUT").click()
       cy.contains('Place Order').click()
    }
)})