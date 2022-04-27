/// <reference types="cypress" />

class miniAccessioning {


    openMiniCase() {
        const openminicas = cy.get(".btn.btn-link.pull-right.mb-1.collapsed")
        openminicas.click().wait(2000)
    }
    selectclient(cname) {
        const selectClient = cy.get("#normal-view > div > div:nth-child(1) > div:nth-child(1) > div > ng-select > div > div > div.ng-input > input[type=text]")
        selectClient.click().type(cname).wait(2000).type('{enter}')

    }
    selectPhysician(phyname) {
        const phy = cy.get('#normal-view > div > div:nth-child(1) > div:nth-child(2) > div > ng-select > div > div > div.ng-input > input[type=text]')
        phy.type(phyname).wait(2000).type('{enter}')
    }
    enterPLastName(plastname) {

        const pLastname = cy.get('input[name=pLastName]')
        pLastname.type(plastname)
    }
    enterPFLastName(pfastname) {
        const pFirstname = cy.get('input[name=pFirstName]')
        pFirstname.type(pfastname)
    }
    enterpdob(dobp) {
        const pdob = cy.get('#p-dob11')
        pdob.type(dobp)
        cy.wait(2000)
    }
    selectSpecimentype(sptype) {
        const selectSpecimen = cy.get('#normal-view > div > div:nth-child(3) > div:nth-child(1) > div > ng-select > div > div > div.ng-input > input[type=text]')
        selectSpecimen.type(sptype).wait(2000).type('{enter}')

    }
    selectCollectionDate(coldate) {
        const selectColDate = cy.get('#p-colldate22')
        selectColDate.type(coldate)
    }
    selectCollectedBy(colbyvalue) {
        if (colbyvalue == 'client') {
            const selectColBy = cy.get('[for=client222]')
            selectColBy.should('be.visible').should('not.be.checked').click()
            cy.wait(2000)
        }
        else {

        }

    }
    createCase(bvalue) {
        if (bvalue == 'sn') {
            const saveNewBtn = cy.get(".card-header > .no-arrow > :nth-child(2)")
            saveNewBtn.click()
            const closepopup = cy.get('#createnewcaseModal')
            closepopup.click().wait(4000)
        }
        else if (bvalue == 'sp') {
            const savePrintBtn = cy.get(".card-header > .no-arrow > :nth-child(1)")
            savePrintBtn.click().wait(4000)
        }
        else {
            const savedraftbtn = cy.get(".card-header > .no-arrow > :nth-child(3)")
            savedraftbtn.click().wait(4000)
        }
    }
    // caseadditonVerification(successmessage) {
    //    const successmsgr =  cy.get('.notifier__notification-message')
    //    successmsgr.should('contain.text', successmessage)

    // }
    // verifytext(text) {
    //     const vtext= cy.get('.invalid-feedback')
    //     vtext.should('include.text',text)
    // }
}
export default miniAccessioning