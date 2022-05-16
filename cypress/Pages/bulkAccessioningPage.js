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
    readExcelFile(){
        cy.parseXlsx('cypress/fixtures/testfiles/Bacc nglis autotest.xlsx').then((jsonData) => {
            //  const rowLength = Cypress.$(jsonData[1].data).length
              for (let index = 0; index < 1; index++) {
                  var jsonData = jsonData[index].data
                  console.log(jsonData[index].data)
                  cy.writeFile("cypress/fixtures/bulkdata.json", { firstname: jsonData[2][0], lastname: jsonData[2][1] })
              }
          })
    }
    
    
}
export default accessionedByBulk