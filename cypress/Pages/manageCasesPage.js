/// <reference types="cypress" />
class manageCases {
    caseMenu() {
        const casemenu = cy.get("#accordionSidebar > li:nth-child(7) > a")
        casemenu.click()
    }
    navToManageCases(){
        const managecases = cy.get("#specimenmodule > div > a:nth-child(2)")
        managecases.click().wait(2000)
    }
    OpenManagevasesURL(mcurl){
        cy.visit(mcurl).wait(3000)
        cy.get('#content > div').should('contain','Search')
    }


}

export default manageCases