/// <reference types="cypress" />
import miniAccessioning from "../../../Pages/miniAccessioningPage";
import login from "../../../Pages/loginPage"
import logout from "../../../Pages/logoutPage"
import manageCases from "../../../Pages/manageCasesPage"
import validateActions from "../../../Pages/validation";

const managecasesp = new manageCases()
const miniAcc = new miniAccessioning()
const notif =new validateActions()


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
            miniAcc.selectclient(casedetails.ClientName)
            miniAcc.selectPhysician(casedetails.PhysicianName)
            miniAcc.enterPLastName(casedetails.PatientLastName)
            miniAcc.enterPFLastName(casedetails.PatientFirstName)
            miniAcc.enterpdob(casedetails.PatientDOB)
            miniAcc.selectSpecimentype(casedetails.SpecimenType)
            miniAcc.selectCollectionDate(casedetails.CollectionDate)
            miniAcc.selectCollectedBy(casedetails.CollectedBy)
            miniAcc.createCase(casedetails.createCaseAs)
            notif.patientcreatedSuccesufully(casedetails.SuccessMessage)
         
        })

    })
    it('User should not able be to Create Mini Case without mandatory fields', function () {
        cy.fixture('CaseDetails').then((nonmanddata) => {
            miniAcc.createCase(nonmanddata.createCaseAs)
            notif.verifyCaseNotCreated(nonmanddata.validationtext)
        })
    })
    it('System should generate Patient already exist popup',function(){
        cy.fixture('CaseDetails').then((casedetails) => {
            miniAcc.selectclient(casedetails.ClientName)
            miniAcc.selectPhysician(casedetails.PhysicianName)
            miniAcc.enterPLastName(casedetails.PatientLastName)
            miniAcc.enterPFLastName(casedetails.PatientFirstName)
            miniAcc.enterpdob(casedetails.PatientDOB)
            notif.verifypatientexist(casedetails.Confirmation_Msg)
            miniAcc.selectSpecimentype(casedetails.SpecimenType)
            miniAcc.selectCollectionDate(casedetails.CollectionDate)
            miniAcc.selectCollectedBy(casedetails.CollectedBy)
            miniAcc.createCase(casedetails.createCaseAs)
            notif.patientcreatedSuccesufully(casedetails.SuccessMessage)
         
        })
    })

})