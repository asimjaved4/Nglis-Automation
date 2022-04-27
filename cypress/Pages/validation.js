/// <reference types="cypress" />
class validateActions {

    patientcreatedSuccesufully(successmessage) {
        const notif = cy.get('.notifier__notification-message')
        notif.should('contain.text', successmessage)
    }
    verifyCaseNotCreated(text) {
        const vtext= cy.get('.invalid-feedback')
        vtext.should('include.text',text)
    }
}
export default validateActions