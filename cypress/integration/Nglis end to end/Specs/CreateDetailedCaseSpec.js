/// <reference types="cypress" />
import detailedAccessioned from "../../../Pages/detailedAccessioningPage"
import login from "../../../Pages/loginPage"
import logout from "../../../Pages/logoutPage"

const detailAcc = new detailedAccessioned()

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
            
            detailAcc.selectdclient(detailcasedata[0].ClientName)
            detailAcc.selectdphysician(detailcasedata[0].PhysicianName)
            detailAcc.selectdcolby(detailcasedata[0].CollectedBy)
            detailAcc.selectsentdate(detailcasedata[0].SentDate)
            detailAcc.selectrecdate(detailcasedata[0].ReceivingDate)
            detailAcc.enterdplastname(detailcasedata[0].PatientLastName)
            detailAcc.enterdpfirstname(detailcasedata[0].PatientFirstName)
            detailAcc.enterddob(detailcasedata[0].PatientDOB)
            detailAcc.selectgender(detailcasedata[0].Gender)
            detailAcc.selectpatienttype(detailcasedata[0].PatientType)
            detailAcc.selectdspecimentype(detailcasedata[0].SpecimenType)

        })


    })
})