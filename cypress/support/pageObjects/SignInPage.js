class SignInPage {

    getEmail() {
        return cy.get('input[type="email"]')
    }

    getPassword() {
        return cy.get('input[type="password"]')

    }
    getSignInButton() {
        return cy.get('button[type="submit"]')

    }
}

export default SignInPage;
