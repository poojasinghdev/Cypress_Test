/// <reference types="Cypress" />
describe('A test', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('url'))
        cy.fixture('signUp').then(function (data) {
            this.data = data
            cy.login(this.data.email, this.data.password)
        })
    })

    it('seeting page', function () {
        cy.url().should('include', '/settings')
    })
})