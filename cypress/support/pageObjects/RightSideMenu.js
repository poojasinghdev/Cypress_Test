class RightSideMenu {


    getAvatarLink() {
        //return cy.get('.avatar.avatar-lg')
        return cy.get('.menu-profile > .dropdown-toggle > img')

    }
    getSideMenuList() {
        return cy.get('#menu-width').find('.menu-item')
    }
    getLogoutLink() {
       // return cy.get('#menu-width > :nth-child(5) > .py-2')
        return cy.get('.dropdown-menu > .mt-0')
    }
}

export default RightSideMenu;
