/// <reference types="cypress" />
import login from "../../../Pages/loginPage"
import logout from "../../../Pages/logoutPage"
import manageCases from "../../../Pages/manageCasesPage"
import validateActions from "../../../Pages/validation"

const managecasesp = new manageCases()
const notify =new validateActions()


describe("Navigate to Manage Cases", function () {

    beforeEach(() => {
        const loggp = new login()
        loggp.navigate('https://nglisuat.siparadigm.com/login')
        loggp.enterUsername('atest')
        loggp.enterPassword('Atest12345*')
        loggp.submit()
        cy.url().should('be.equal', 'https://nglisuat.siparadigm.com/')

    })
    it.skip('Navigate to Manage cases by URL', function () {
        //  const managecasesp = new manageCases()
        managecasesp.OpenManagevasesURL('manage-cases')

    })

    it.skip('Navigate to the Manage Cases by Case menu', function () {


        //  const managecasesp = new manageCases()
        managecasesp.caseMenu()
        managecasesp.navToManageCases()
        cy.url().should('be.equal', 'https://nglisuat.siparadigm.com/manage-cases')
    })
    it.skip('User should be able to submit draft case in manage case page', function () {
        managecasesp.OpenManagevasesURL('manage-cases')
        managecasesp.draftCaseSubmit('Draft')
        notify.patientcreatedSuccesufully('successfully')

    })
    it.skip('User should be able to submit draft case in detailed case with mandatory fields',function(){
        managecasesp.OpenManagevasesURL('manage-cases')
        managecasesp.draftDetailCaseSubmit('Draft')
        cy.url().should('include','manage-cases')
    })
    it.skip('User should able to update draft case with mandatory fields',function(){
        managecasesp.OpenManagevasesURL('manage-cases')
        managecasesp.updateDraftCase('Draft')
        notify.patientcreatedSuccesufully('successfully')
    })
    it('User should not be able to update draft case without mandatory fields',function(){
        managecasesp.OpenManagevasesURL('manage-cases')
        managecasesp.updateDraftCasenonMandatory('Draft')
        notify.verifyCaseNotCreated('Please Select')
    })

    afterEach(() => {

        const logoutp = new logout()
        logoutp.profileMenu()
        logoutp.openlogOut()
        logoutp.clickOnlogOutButton()
    })

})