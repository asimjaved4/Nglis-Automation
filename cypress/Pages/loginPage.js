/// <reference types="cypress" />


class login {

    navigate(url) {
        cy.visit(url)
    }
    enterUsername(usrname) {
        const userName = cy.get('input[formcontrolname=userName]')
        userName.type(usrname)
        
    }
    enterPassword(pwd) {
        const uPassword = cy.get('input[formcontrolname=password]')
        uPassword.type(pwd)
        
    }
    submit() {

        const submitButton = cy.get('[type=submit]').should('be.visible')
        submitButton.click()
        cy.wait(3000)
    }
}
export default login