/// <reference types="Cypress" />
import SignUpPage from '../../support/pageObjects/SignUpPage'

describe('Sign In Test Suite', function () {

    before(function () {
        // runs once before all tests in the block
        cy.fixture('signUp').then(function (data) {
            this.data = data
        })
    })
    it('Should sign up the user', function () {
        const signUpPage = new SignUpPage()
        cy.visit(Cypress.env('url'))
        signUpPage.getSignUpLink().click()
        //Checking whether the user is able to navigate to Sign Up Page.
        cy.url().should('include', '/auth/enterprise/sign-up')

        signUpPage.getFullNameTextBox().type(this.data.fullname)
        signUpPage.getEmailTextBox().type(this.data.email)
        signUpPage.getPasswordTextBox().type(this.data.password)
        signUpPage.getPasswordConfirmationTextBox().type(this.data.password)
        signUpPage.getOrganisationTextBox().type(this.data.organisation)
        signUpPage.getorganisationdescriptionTextBox().type(this.data.organisationDescription)
        cy.get('#country').type(this.data.country)
        cy.get('#react-select-2-option-104').click()
        signUpPage.getPhonenumberTextBox().type(this.data.phonenumber)
        signUpPage.getTOSCheckbox().click({ force: true })
        signUpPage.getDataProcessCheckbox().click({ force: true })
        signUpPage.getSignUpButton().click({ force: true })
        //Checking whether A new user is able to sign up with valid data and navigate to default user Profile page
        cy.url().should('include', '/users/profile')

    })

})