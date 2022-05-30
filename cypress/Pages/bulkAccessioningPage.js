/// <reference types="cypress" />
class accessionedByBulk {
    openbulkAccession() {
        const bulkAcessionBTN = cy.get('#content > div > div > div > div.dropdown.no-arrow > a.btn.submit-button.btn-sm.pull-right.mr-2')
        bulkAcessionBTN.click()
    }
    chooseBulkfile(bfile) {
        const chosebutton = cy.get('#importCaseFIle')
        chosebutton.attachFile(bfile)
    }
    verifyFile() {
        const verifyf = cy.get('#import-successModal > .modal-dialog > .modal-content > .modal-body > p')
        verifyf.should('include.text', 'successfully')
    }
    clicOnImport() {
        const importBTN = cy.get('#importModal > div > div > div.modal-footer > a')
        importBTN.click().wait(3000)
    }
    downloadOutputFile() {

        const dbtn = cy.get('#import-successModal > div > div > div.modal-body > a > i')
        dbtn.click().wait(4000)

    }
    closeBulk() {
        const closebtn = cy.get('#import-successModal > div > div > div.modal-footer > button')
        closebtn.click()
    }
    readExcelFile() {
        cy.parseXlsx('cypress/downloads/download.xlsx').then((jsonData) => {
            //const rowLength = Cypress.$(jsonData[0].data).length
            //for (let i = 2; i < 6; i++) {
//aa
            //   var jsonData = jsonData[0].data
            //  console.log(jsonData[index].data)
            cy.writeFile("cypress/fixtures/bulkdata.json", [
                {firstname: jsonData[0].data[2][0], lastname: jsonData[0].data[2][1], caseNo: jsonData[0].data[2][18]},
                { firstname: jsonData[0].data[3][0], lastname: jsonData[0].data[3][1], caseNo: jsonData[0].data[3][18] },
                { firstname: jsonData[0].data[4][0], lastname: jsonData[0].data[4][1], caseNo: jsonData[0].data[4][18] },
                { firstname: jsonData[0].data[5][0], lastname: jsonData[0].data[5][1], caseNo: jsonData[0].data[5][18] }])
            ///}
        })
    }
    writeresultuploadfile(){
            cy.writeFile('cypress/fixtures/testfiles/resup_auto.csv','hello')
        
    }


}
export default accessionedByBulk