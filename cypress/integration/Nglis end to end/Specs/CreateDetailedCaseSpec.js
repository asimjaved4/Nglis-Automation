/// <reference types="cypress" />
import detailedAccessioned from "../../../Pages/detailedAccessioningPage"
import login from "../../../Pages/loginPage"
import logout from "../../../Pages/logoutPage"
import validateActions from "../../../Pages/validation"

const detailAcc = new detailedAccessioned()
const notify =new validateActions()

describe('Create Detailed Case', function () {

    beforeEach(() => {
        const loggp = new login()
        loggp.navigate('login')
        loggp.enterUsername('atest')
        loggp.enterPassword('Atest12345*')
        loggp.submit()
        cy.url().should('be.equal', 'https://nglisuat.siparadigm.com/')
        detailAcc.openDetailCasePage('add-case')

    })
    afterEach(() => {

        const logoutp = new logout()
        logoutp.profileMenu()
        logoutp.openlogOut()
        logoutp.clickOnlogOutButton()
    })


    it('user should able to create detailed case', function () {
        cy.fixture('CaseDetails').then((detailcasedata) => {

            detailAcc.selectdclient(detailcasedata.ClientName)
            detailAcc.selectdphysician(detailcasedata.PhysicianName)
            detailAcc.selectdcollectiondate(detailcasedata.CollectionDate)
            detailAcc.selectdcolby(detailcasedata.CollectedBy)
            detailAcc.selectsentdate(detailcasedata.SentDate)
            detailAcc.selectrecdate(detailcasedata.ReceivingDate)
            detailAcc.enterdplastname(detailcasedata.PatientLastName)
            detailAcc.enterdpfirstname(detailcasedata.PatientFirstName)
            detailAcc.enterddob(detailcasedata.PatientDOB)
            detailAcc.selectgender(detailcasedata.Gender)
            detailAcc.selectpatienttype(detailcasedata.PatientType)
            detailAcc.selectdspecimentype(detailcasedata.SpecimenType)
            detailAcc.navAddAttachments()
            detailAcc.selectAttachmentTyppe(detailcasedata.AttachmentType)
            detailAcc.selectFile(detailcasedata.AttachmentFilePAth)
            detailAcc.createCase(detailcasedata.createCaseAs)
            detailAcc.clicksubmitbutton()
            notify.patientcreatedSuccesufully(detailcasedata.SuccessMessage)
        })
    })
    it.skip('User should not be able to create detailed case without mandatory fields',function(){
        cy.fixture('CaseDetails').then((nondata)=>{
            detailAcc.createCase(nondata.createCaseAs)
            detailAcc.clicksubmitbutton()
            notify.verifyCaseNotCreated(nondata.validationtext)

        })
    })
})