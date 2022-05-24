/// <reference types="cypress" />

class batchCreation {
    openBatchMenu() {
        cy.get('#accordionSidebar > li:nth-child(9) > a > span').click()
    }
    openNewBatch() {
        cy.get('#covidmodule > div > a:nth-child(1)').click().wait(2000)
    }
    scanCasesInBatch(prefx,cnum) {
        var i = 0

        for (i = 0; i < 3; i++) {
            cy.get('#casenumberInput').clear().type(prefx + cnum).wait(2000)
            cnum++
        }
    }
    enterbatchID(bid) {
        cy.get('[name=batchId]').type(bid)
    }
    clickCreateNewBatch() {
        cy.get('.btn.btn-sm.submit-button')
            .click().wait(3000)
            
    }
    validateBatch(batchid) {
        cy.get('#covid19-active-batch>tbody>tr:nth-child(1)>td:nth-child(1)> a')
            .should('have.text', batchid)
    }

}
export default batchCreation