/// <reference types="cypress" />
import miniAccessioning from "../../../Pages/miniAccessioningPage";
import login from "../../../Pages/loginPage"
import logout from "../../../Pages/logoutPage"
import manageCases from "../../../Pages/manageCasesPage"

const managecasesp = new manageCases()
const miniAcc = new miniAccessioning()


describe('Create Mini Accessioned Cases', function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    beforeEach(() => {
        const loggp = new login()
        loggp.navigate('login')
        loggp.enterUsername('atest')
        loggp.enterPassword('Atest12345*')
        loggp.submit()
        cy.url().should('be.equal', 'https://nglisuat.siparadigm.com/')
        managecasesp.OpenManagevasesURL('manage-cases')
        miniAcc.openMiniCase()

    })
    afterEach(() => {

        const logoutp = new logout()
        logoutp.profileMenu()
        logoutp.openlogOut()
        logoutp.clickOnlogOutButton()
    })
    
    it('Create Mini Accessioned with mandatory fields', function () {

        cy.fixture('CaseDetails').then((casedetails) => {
            miniAcc.selectclient(casedetails[0].ClientName)
            miniAcc.selectPhysician(casedetails[0].PhysicianName)
            miniAcc.enterPLastName(casedetails[0].PatientLastName)
            miniAcc.enterPFLastName(casedetails[0].PatientFirstName)
            miniAcc.enterpdob(casedetails[0].PatientDOB)
            miniAcc.selectSpecimentype(casedetails[0].SpecimenType)
            miniAcc.selectCollectionDate(casedetails[0].CollectionDate)
            miniAcc.selectCollectedBy(casedetails[0].CollectedBy)
            miniAcc.createCase(casedetails[0].createCaseAs)
            miniAcc.caseadditonVerification(casedetails[0].verifycase)
        })

    })
    it('User should not able be to Create Mini Case without mandatory fields', function () {
        cy.fixture('CaseDetails').then((nonmanddata) => {
            miniAcc.createCase(nonmanddata[1].createCaseAs)
            miniAcc.verifytext(nonmanddata[1].validationtext)
        })
    })

})