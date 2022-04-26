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
        sgender.select(sgn)
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
    

}
export default detailedAccessioned
