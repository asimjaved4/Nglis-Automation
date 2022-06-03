/// <reference types="cypress" />
class Report {
    reportMenu() {
        cy.get('[data-target="#reportmodule"]').click()
        //cy.get('#accordionSidebar > li:nth-child(10) > a').click()
    }
    navToManageReport() {
        cy.get('[featurecode=MRMA-MR]').click()
    }
    selectClient(rclient) {
        cy.get('#content > div > div > div > div.container-search > div > div > div:nth-child(1) > div:nth-child(1) > div > ng-select > div > div > div.ng-input > input[type=text]')
        .type(rclient).wait(2000).type("{enter}")
    }
    selectIntakeID(id) {
        cy.get('#intakeid-select').select(id)
    }
    clickOnSearch(){
        cy.get('#searchci').click().wait(2000)
    }
}
export default Report