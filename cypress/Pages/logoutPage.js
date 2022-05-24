/// <reference types="cypress" />
class logout {
    profileMenu() {
        const pmenu = cy.get('.img-profile')
        pmenu.click({ force: true })
    }
    openlogOut() {
        const loLink = cy.get('[featurecode="USRA-LO"]')
        loLink.click({ force: true })
    }
    clickOnlogOutButton() {
        const LogoutButton = cy.get('.modal-footer > .btn-primary')
        LogoutButton.click({ force: true }).wait(3000)
    }
}
export default logout