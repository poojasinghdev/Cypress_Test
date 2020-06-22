/// <reference types="Cypress" />
import RightSideMenu from '../../support/pageObjects/RightSideMenu'

describe('Log Out Test Suite', function () {

    beforeEach(() => {
        cy.visit(Cypress.env('url'))
        cy.fixture('signUp').then(function (data) {
            this.data = data
            cy.login(this.data.email, this.data.password)
        })
    })
    it('Should Log Out the application', function () {
        const rightSideMenu = new RightSideMenu()
        rightSideMenu.getAvatarLink().click()
        //rightSideMenu.getSideMenuList().invoke('show')
        rightSideMenu.getLogoutLink().click({ force: true })
        //Checking whether the user is able to Log out and navigate to default user Profile page
        cy.url().should('include', '/auth/enterprise/log-in')
    })

})