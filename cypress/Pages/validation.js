/// <reference types="cypress" />
class validateActions {

    patientcreatedSuccesufully(successmessage) {
        //  const notif = cy.get('#content > div > notifier-container > ul > li:nth-child(1)')
        const notif = cy.get('li > notifier-notification')
        notif.should('include.text', successmessage)
    }
    verifyCaseNotCreated(text) {
        const vtext = cy.get('.invalid-feedback')
        vtext.should('include.text', text)
    }
    verifypatientexist(confirmmsg) {
        cy.get('#normal-view > div > div:nth-child(2)').click().wait(1000)
        const popupmsg = cy.get('#swal2-content')
        popupmsg.should('include.text', confirmmsg)
        cy.get('button.swal2-confirm.swal2-styled').click().wait(1000)
    }
}
export default validateActions