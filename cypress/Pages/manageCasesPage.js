/// <reference types="cypress" />
class manageCases {
    caseMenu() {
        const casemenu = cy.get("#accordionSidebar > li:nth-child(7) > a")
        casemenu.click()
    }
    navToManageCases() {
        const managecases = cy.get("#specimenmodule > div > a:nth-child(2)")
        managecases.click().wait(2000)
    }
    OpenManagevasesURL(mcurl) {
        cy.visit(mcurl).wait(4000)
        cy.get('#content > div').should('contain', 'Search')
    }
    draftCaseSubmit(dcase) {

        cy.get('tbody[id=active_tbody]>tr td:nth-child(11)').each(($e, index, $list) => {
            const text = $e.text()
            if (text.includes(dcase)) {
                cy.get('tbody[id=active_tbody]>tr td:nth-child(12) > a:nth-child(1)').eq(index).click().wait(1000)
                cy.get('.swal2-confirm.swal2-styled').click().wait(1000)
            }
        })
    }
    draftDetailCaseSubmit(ddcase) {
        cy.get('tbody[id=active_tbody]>tr td:nth-child(11)').each(($e, index, $list) => {
            const text = $e.text()
            if (text.includes(ddcase)) {
                cy.get('tbody[id=active_tbody]>tr td:nth-child(1)> a').eq(index).click().wait(2000)
                cy.get('[featurecode=SPCA-UC]').click()
                cy.get('#submitModal > div > div > div.modal-footer > a').click().wait(2000)

            }
        })
    }
    updateDraftCase(updcase) {
        cy.get('tbody[id=active_tbody]>tr td:nth-child(11)').each(($e, index, $list) => {
            const text = $e.text()
            if (text.includes(updcase)) {
                cy.get('tbody[id=active_tbody]>tr td:nth-child(1)> a').eq(index).click().wait(2000)
                cy.get('[featurecode=SPCA-SD]').click()
                cy.get('#submitModal > div > div > div.modal-footer > a').click().wait(2000)

            }
        })
    }
    updateDraftCasenonMandatory(updcase) {
        cy.get('tbody[id=active_tbody]>tr td:nth-child(11)').each(($e, index, $list) => {
            const text = $e.text()
            if (text.includes(updcase)) {
                cy.get('tbody[id=active_tbody]>tr td:nth-child(1)> a').eq(index).click().wait(4000)
                cy.get('[featurecode=SPCA-SD]').click()
                cy.get('#submitModal > div > div > div.modal-footer > a').click().wait(2000)
            }
        })
    }
}

export default manageCases