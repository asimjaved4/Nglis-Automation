/// <reference types="cypress" />

class createNewIntake {
    intakemenu() {
        cy.get('.nav-link[aria-controls=intakenmodule]').click()
        //cy.wait(2000)
    }
    navManageIntake() {
        cy.get('[featurecode=SPCA-MI]').click()
        //cy.wait(2000)
    }
    clickcreatenewIntake() {
        cy.get('[featurecode=SPCA-CI]').click()
        cy.wait(2000)
    }
    selectinClient(sinc) {
        cy.get('#collapsecases_list > form.ng-untouched > .card-body > #normal-view > :nth-child(1) > :nth-child(1) > :nth-child(1) > .col-md-8 > .form-control')
            .type(sinc).wait(2000).type('{enter}')


    }
    selectinColby(incol) {
        if (incol == 'client') {
            cy.get('[for="client1"]').click()
        }
        else {
            cy.get('[for="sip11"]').should('be.selected')
        }
    }
    enterinNotes(nt) {
        cy.get('[placeholder=Notes]').type(nt)
    }
    enterEmptyKits(emkit) {
        cy.get('[name=countKits]').type(emkit)
    }
    enterLeftKit(lftkit) {
        cy.get('[name=countKitsLeft]').type(lftkit)
    }
    enterNP(enp) {
        cy.get('[name=nP]').type(enp)
    }
    enterOP(eop) {
        cy.get('[name=o]').type(eop)
    }
    enterN(enasal) {
        cy.get('[name=n]').type(enasal)
    }
    entersal(esal) {
        cy.get('[name=s]').type(esal)
    }
    selectinattachFile(infpath) {
        cy.get('#upload-att').attachFile(infpath)
    }
    verifyintakeattachfile() {
        cy.get('#normal-view > div > div:nth-child(3) > div.table.mb-0 > table > tbody > tr > td:nth-child(1)')
            .contains('Intake Attachment')
    }
    submitintakeBtn() {
        cy.get('#collapsecases_list > form > div.card-header.d-flex.justify-content-between.align-items-center.flex-row > div > a')
            .click().wait(2000)
    }
    submitinakepopup() {
        cy.get('[style="display: block;"] > .modal-dialog > .modal-content > .modal-footer > .submit-button')
            .click().wait(3000)
    }
    verifyAddIntakecy() {
        cy.get('#DataTables_Table_0 > tbody > tr:nth-child(1)')
            .should('have.class', 'bgGreen')
    }
    openIntake() {
        cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click().wait(3000)
    }
    scanCase(prefix, case_number) {
        for (var i = 0; i < 3; i++) {
            const scanbar = cy.get('#basic-url')
            scanbar.clear().type(prefix + case_number).wait(2000)

            cy.get('#addactive_cases>tbody > tr:nth-child(1) > td:nth-child(1) >a')
                .should('have.text', prefix + case_number)
            case_number++
        }
    }
    navToCreateBatch() {
        cy.get('button[featurecode=TWMA-CNB]').click().wait(2000)
    }

    enterBatchID(batch_id) {
        cy.get('[name=batchId]').type(batch_id)
    }
    createBatch() {
        cy.get('.btn.btn-sm.submit-button').invoke('remove', 'a').click().wait(4000)
    }
    validateBatch(batchid) {
        cy.get('#covid19-active-batch>tbody>tr:nth-child(1)>td:nth-child(1)> a')
            .should('have.text', batchid)
    }
}
export default createNewIntake