/// <reference types="cypress" />
import login from "../../../Pages/loginPage"
import logout from "../../../Pages/logoutPage"
import manageCases from "../../../Pages/manageCasesPage"


describe("Navigate to Manage Cases", function () {

    beforeEach(() => {
        const loggp = new login()
        loggp.navigate('https://nglisuat.siparadigm.com/login')
        loggp.enterUsername('atest')
        loggp.enterPassword('Atest12345*')
        loggp.submit()
        cy.url().should('be.equal', 'https://nglisuat.siparadigm.com/')

    })
    it('Navigate to Manage cases by URL', function () {
        const managecasesp = new manageCases()
        managecasesp.OpenManagevasesURL('https://nglisuat.siparadigm.com/manage-cases')

    })

    it('Navigate to the Manage Cases by Case menu', function () {


        const managecasesp = new manageCases()
        managecasesp.caseMenu()
        managecasesp.navToManageCases()
        cy.url().should('be.equal', 'https://nglisuat.siparadigm.com/manage-cases')
    })
    afterEach(() => {

        const logoutp = new logout()
        logoutp.profileMenu()
        logoutp.openlogOut()
        logoutp.clickOnlogOutButton()
    })

})