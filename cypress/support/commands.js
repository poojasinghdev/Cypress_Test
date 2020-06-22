// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import SignInPage from '../support/pageObjects/SignInPage'
import RightSideMenu from '../support/pageObjects/RightSideMenu'

Cypress.Commands.add("login", (email, password) => {
    const signInPage = new SignInPage()
    // cy.visit(Cypress.env('url'))
    signInPage.getEmail().type(email)
    signInPage.getPassword().type(password)
    signInPage.getSignInButton().click()
})
Cypress.Commands.add("logout", () => {
    const rightSideMenu = new RightSideMenu()
    rightSideMenu.getAvatarLink().click()
    rightSideMenu.getLogoutLink().click({ force: true })
})

// Cypress.Commands.add("login", (email, password) => {
//     cy.request({
//         method: 'POST',
//         url: `http://localhost:3000/api/rest/login`,
//         body: {
//             username: 'Test1@gmail.com',
//             password: 'Test@123'
//         }
//     }).its('body').then((body) => {
//         const vuexData = { user: { authenticationData: { token: body.token } } }
//         console.log(vuexData, 'eyJhbG --- pooja')
//         window.localStorage.setItem('ey', JSON.stringify(vuexData))
//     })
// })

//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

