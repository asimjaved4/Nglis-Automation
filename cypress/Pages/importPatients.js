/// <reference types="cypress" />

class patientsImport {
    openPatientMenu() {
        cy.get("[data-target='#patientsmodule']").click()
    }
    navManagePatient() {
        cy.get('[featurecode=PNTA-MP]').click().wait(2000)
    }
    clickOnImportPatientBTN() {
        cy.get('[featurecode=PNTA-IP]').click()
    }
    chooseFile(path) {
        cy.get('#importPatientFIle').attachFile(path)
    }
    clickOnImportBTN() {
        cy.get('#importModal > div > div > div.modal-footer > a').click().wait(2000)
    }
    validateFileimport(message){
        cy.get('#import-successModal > div > div > div.modal-body > p').should('include.text',message)
    }
    downloadOutputFile(){
        cy.get("[title='Click to download']").click().wait(2000)
    }
    closeimportPatientsPopUp(){
        cy.get('#import-successModal > div > div > div.modal-footer > button').click()
    }

}
export default patientsImport