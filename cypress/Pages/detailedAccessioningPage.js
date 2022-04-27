/// <reference types="cypress" />
class detailedAccessioned {
    openDetailCasePage(detailPageUrl) {
        cy.visit(detailPageUrl).wait(2000)
    }
    selectdclient(dcname) {
        const selectclientname = cy.get('#collapsecase > div:nth-child(4) > div > ng-select > div > div > div.ng-input > input[type=text]')
        selectclientname.type(dcname).wait(2000).type('{enter}')
        // cy.wait(2000)
        // cy.get('.ng-option-label').contains(dcname).type('{enter}')
        // cy.wait(2000)
    }
    selectdphysician(dphysician) {
        const dphys = cy.get('#collapsecase > div:nth-child(5) > div > ng-select > div > div > div.ng-input > input[type=text]')
        dphys.type(dphysician).wait(2000).type('{enter}')
    }
    selectdcollectiondate(dcdate) {
        const dcoldate = cy.get('#colDate')
        dcoldate.type(dcdate)
    }
    selectdcolby(coltype) {
        if (coltype == 'client') {
            const dcolbc = cy.get('[for=client]')
            dcolbc.should('be.visible').should('not.be.checked').click()
        }
        else {

        }
    }
    selectsentdate(sdate) {
        const sendate = cy.get('#send-date')
        sendate.type(sdate)
    }
    selectrecdate(rdate) {
        const recdate = cy.get('#rec-date')
        recdate.type(rdate)
    }
    enterdplastname(dplnm) {
        const dplname = cy.get('#p-lastname11')
        dplname.type(dplnm)
    }
    enterdpfirstname(dpfnm) {
        const dpfname = cy.get('#p-firstname11')
        dpfname.type(dpfnm)
    }
    enterddob(ddob) {
        const dpatdob = cy.get('#p-dob1')
        dpatdob.type(ddob)
    }
    selectgender(sgn) {
        const sgender = cy.get('#gender-select')
        sgender.select(sgn).should('have.value', sgn)
    }
    selectpatienttype(patype) {
        const ptype = cy.get(':nth-child(6) > .col-md-8 > .form-control > .ng-select-container > .ng-value-container > .ng-input > input')
        ptype.type(patype).type('{enter}')
    }
    selectdspecimentype(dsptype) {
        const dspectype = cy.get(':nth-child(1) > .col-md-8 > .form-control > .ng-select-container > .ng-value-container > .ng-input > input')
        dspectype.type(dsptype).type('{enter}')
        const addspecbutton = cy.get(':nth-child(4) > .col-md-1 > .btn')
        addspecbutton.click()
    }
    navAddAttachments() {
        const addattach = cy.get('#att_button')
        addattach.click()
    }
    selectAttachmentTyppe(attype) {
        const selectattachtype = cy.get('#attachment-select')
        selectattachtype.select(attype).contains(attype)
        //selectattachtype.select(attype).contains(attype)
    }
    selectFile(filepath) {
        const chosebutton = cy.get('#upload-att')
        chosebutton.attachFile(filepath).wait(2000)
        // const verifyuploadedreport = cy.get('#caseattach_tab > div.table > .table > tbody > tr > :nth-child(1)')
        // cy.wait(2000)
        // verifyuploadedreport.contains('Consent Form')
    }
    createCase(CaseAs) {
        if (CaseAs == 'sn') {
            const dSaveAndNewbutton = cy.get('[featurecode="SPCA-SN"]')
            dSaveAndNewbutton.click().wait(1000)
        }
        else if (CaseAs == 'sp') {
            const dSaveAndPrintbutton = cy.get('[featurecode="SPCA-SP"]')
            dSaveAndPrintbutton.click().wait(1000)
        }
        else {
            const dSaveAndPrintbutton = cy.get('[featurecode="SPCA-SD"]')
            dSaveAndPrintbutton.click().wait(1000)
        }
    }
    clicksubmitbutton() {
        const submitbutton = cy.get('#submitModal > div > div > div.modal-footer > a')
        submitbutton.click()
        cy.wait(4000)
    }
    // verifycaseacreation(successmessage) {
    //     const caseaddmsg = cy.get('#content > div > notifier-container > ul > li:nth-child(1)')
    //     caseaddmsg.should('contain.text', successmessage)
    // }
    // validatetext(text){
    //     const vnontext =cy.get('.invalid-feedback')
    //     vnontext.should('include.text',text)
    // }


}

export default detailedAccessioned
