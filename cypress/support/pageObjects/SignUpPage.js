class SignUpPage {
    getSignUpLink() {
        return cy.get('.text-center > .font-500')
    }
    getFullNameTextBox() {
        return cy.get('input[name="fullname"]')
    }
    getEmailTextBox() {
        return cy.get('input[name="email"]')
    }
    getPasswordTextBox() {
        return cy.get('input[name="password"]')
    }
    getPasswordConfirmationTextBox() {
        return cy.get('input[name="passwordConfirmation"]')
    }
    getOrganisationTextBox() {
        return cy.get('input[name="organisation"]')
    }
    getorganisationdescriptionTextBox() {
        return cy.get('input[name="organisationDesc"]')
    }
    getPhonenumberTextBox() {
        return cy.get('input[name="phoneNumber"]')
    }

    getTOSCheckbox() {
        return cy.get('#privacy')

    }
    getDataProcessCheckbox() {
        return cy.get('#gdpr')

    }
    getSignUpButton() {
        return cy.get('.btn')

    }
}

export default SignUpPage;
