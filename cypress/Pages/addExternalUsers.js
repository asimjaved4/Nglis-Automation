/// <reference types="cypress" />

class externalUsers {
    navManageClientUserTab() {
        const manageclientusettab = cy.get('a[href="#manage_client_user"]')
        manageclientusettab.click().wait(2000)

    }
    openUser() {
        const userpopup = cy.get('a[href="#collapse-div"]')
        userpopup.click().wait(2000)
    }
    selectRoles(urole) {
        const role = cy.get('[formcontrolname=clientUserRole]')
        role.type(urole).type('{enter}').wait(1000)
    }
    enterNPI(unpi) {
        const npi = cy.get('[formcontrolname=clientUserNpi]')
        npi.type(unpi).wait(1000)
    }
    enterUserEmail(uemail) {
        const email = cy.get('[formcontrolname=clientUserEmail]')
        email.type(uemail).wait(1000)
    }
    selectPostNorminal(upn) {
        const postnorminal = cy.get('[formcontrolname=clientUserPNominal]')
        postnorminal.type(upn).type('{enter}').wait(1000)
    }
    enterCuserFirstName(cufname) {
        const ufname = cy.get('[formcontrolname=clientUserFName]')
        ufname.type(cufname).wait(1000)
    }
    enterCuserLastName(culname) {
        const ulname = cy.get('[formcontrolname=clientUserLName]')
        ulname.type(culname).wait(1000)
    }
    enterCuserContactNo(cucontactno) {
        const ucontactno = cy.get('[formcontrolname=clientUserContact]')
        ucontactno.type(cucontactno).wait(1000)
    }
    clickOnAddButton() {
        const addbtn = cy.get('button[type=submit]')
        addbtn.click().wait(2000)
    }
    verifyAddedUser(userFirstName, userLastName) {
        cy.get('#clientUsers>tbody >tr:nth-child(1) td:nth-child(3)')
            .contains('td', userFirstName + " " + userLastName).should('be.visible')
    }
    enterClientProvidedEmail(email) {
        cy.get('[name=clientProvidedEmail]').type(email)
    }
    enterClientProvidedFax(fax) {
        cy.get('[name=clientProvidedFax]').type(fax)
    }
    openUserAction() {
        cy.get('.btn-sm.dropdown-toggle').click().wait(1000)
    }
    checkSuperUser() {
        cy.get('[name=superUCheck]').check().should('be.checked')
    }
    checkCPAccess(){
        cy.get('[name=cpAccessCheck]').check().should('be.checked')
    }
    checkVisibleInCases(){
        cy.get('#clientUsers>tbody >tr:nth-child(1) td:nth-child(10) > div > ul > li:nth-child(3) > div > input').check().should('be.checked')
    }
    checkActive(){
        cy.get('#clientUsers>tbody >tr:nth-child(1) td:nth-child(10) > div > ul > li:nth-child(4) > div > input').check().should('be.checked')
    }
    submit(){
        cy.get('#content > div > div > div > button:nth-child(1)').click().wait(2000)
    }
    

}
export default externalUsers