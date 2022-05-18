/// <reference types="cypress" />

class addPatients {
    navAddPatient() {
        cy.get('.collapse-item[featurecode=PNTA-AP]').click().wait(1000)
    }
    selectPClient(clientname) {
        cy.get('[formcontrolname=client]').type(clientname).wait(1000).type('{enter}')
    }
    enterSSN(ssn) {
        cy.get('[placeholder=SSN]').type(ssn)
    }
    enterPLastName(plastname) {
        cy.get('[name=lastName]').type(plastname)
    }
    enterPFirstName(pfirstname) {
        cy.get('[name=firstName]').type(pfirstname)
    }
    enterPDateOfBirth(pdob) {
        cy.get('[name=dob]').type(pdob)
    }
    selectPGender(gender) {
        if (gender == 'm') {
            cy.get('[for=male]').click()
        }
        else {
            cy.get('[for=female]').click()
        }
    }
    enterPEmail(pemail) {
        cy.get('[type=email]').type(pemail)
    }
    selectPPatientType(pptype) {
        cy.get('#content > div > div > div > div > form > div.card-body > div:nth-child(2) > div:nth-child(12) > div > ng-select > div > div > div.ng-input > input[type=text]')
            .type(pptype).type('{enter}')
    }
    selectPBillingInfo(pbinfo) {
        cy.get('[name=billingInfo]').select(pbinfo).should('include.text', pbinfo)
    }
    selectPEthnicity(pethnicity) {
        cy.get('#content > div > div > div > div > form > div.card-body > div:nth-child(3) > div:nth-child(1) > div > ng-select > div > div > div.ng-input > input[type=text]')
            .type(pethnicity).type('{enter}')
    }
    selectPRace(prace) {
        cy.get('#content > div > div > div > div > form > div.card-body > div:nth-child(3) > div:nth-child(2) > div > ng-select > div > div > div.ng-input > input[type=text]')
            .type(prace).type('{enter}')
    }
    submitPatient() {
        cy.get('#content > div > div > div > div > form > div.card-header.d-flex.justify-content-between.align-items-center.flex-row > div > button')
            .click().wait(3000)
    }
    validatePatientCreated(Pname) {
        cy.get('#all-patient>tbody>tr:nth-child(1)>td:nth-child(3)').should('have.text', Pname)
    }
    collectSpecimen(spec) {
        if (spec == 'np') {
            cy.get('#all-patient > tbody > tr:nth-child(1) > td:nth-child(9) > a:nth-child(1)')
                .click().wait(3000)
        }
        else if (spec == 'n') {
            cy.get('#all-patient > tbody > tr:nth-child(1) > td:nth-child(9) > a:nth-child(2)')
                .click().wait(3000)
        }
        else {
            cy.get('#all-patient > tbody > tr:nth-child(1) > td:nth-child(9) > a:nth-child(3)')
                .click().wait(3000)
        }
        cy.get('#successcreate-modal-h5').should('have.text', 'Success')
    }
    closePopUp() {
        cy.get('#successcreate-modal > div > div > div.modal-footer > button').click()
    }


}
export default addPatients