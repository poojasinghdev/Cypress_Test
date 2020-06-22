/// <reference types="Cypress" />
import SignInPage from '../../support/pageObjects/SignInPage'
import RightSideMenu from '../../support/pageObjects/RightSideMenu'
const signInPage = new SignInPage()
describe('Sign In Test Suite', function () {

    before(function () {
        // runs once before all tests in the block
        cy.fixture('signUp').then(function (data) {
            this.data = data
        })
        cy.visit(Cypress.env('url'))
    })
    // it('Should sign in to google account ', function () {

    //     cy.log('test')
    //     cy.visit(Cypress.env('url'))
    //     //cy.visit('https://staging-platform.shivom.io')
    //     cy.get('input[type="email"]').type('pooja@shivom.io')
    //     cy.get('#identifierNext').click()
    //     //cy.visit()
    //     cy.wait(5000)
    //     cy.get('#password').type('')
    //     cy.get('#passwordNext').click({ force: true }).then(function (el) {
    //         const url = el
    //         cy.log(url)
    //         cy.visit(url)
    //     })
    //     cy.wait(5000)
    // })
    // const baseURL = "https://google.com/";
    // describe("Gmail Login", function () {
    //     it("Enter username", function () {
    //         cy.visit(baseURL);
    //         cy.contains("Gmail").click();
    //         cy.contains("Sign in")
    //             .click({ force: true })
    //             .should("have.value", "");
    //         cy.get("input[type=email]").type("xyz@gmail.com", {
    //             force: true
    //         });
    //     });
    // });

    it('Should sign in with valid credential', function () {
        signInPage.getEmail().type(this.data.email)
        signInPage.getPassword().type(this.data.password)
        signInPage.getSignInButton().click()
        //Checking whether the user is able to sign in with valid credential and navigate to default user Profile page
        cy.url().should('include', '/settings')
        cy.wait(5000)
        cy.logout()
    })

    it('Should show validation error message for mandatory fields in Sign In page', function () {
        cy.wait(5000)
        signInPage.getEmail().type(this.data.email).clear().tab()
        cy.get(':nth-child(1) > .text-error').should('contain', 'Required')
        signInPage.getPassword().type(this.data.password).clear().tab()
        cy.get(':nth-child(2) > .text-error').should('contain', 'Required')
    })


})

//greets with sign in
// Links to sign up
//require email
//require password
// require valid password and username
// navigate to successful login means home page