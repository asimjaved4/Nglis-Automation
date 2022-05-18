/// <reference types="cypress" />
import login from "../../../Pages/loginPage"
import logout from "../../../Pages/logoutPage"
import accessionedByBulk from "../../../Pages/bulkAccessioningPage"
import manageCases from "../../../Pages/manageCasesPage"
import addNewClient from "../../../Pages/AddClient"
import externalUsers from "../../../Pages/addExternalUsers"
import patientsImport from "../../../Pages/importPatients"
import addPatients from "../../../Pages/addPatients"
import createNewIntake from "../../../Pages/createIntake"

const managecasesp = new manageCases()
//const miniAcc = new miniAccessioning()
//const notif = new validateActions()
const bulk = new accessionedByBulk()
const logoutp = new logout()
const client = new addNewClient()
const addExtuser = new externalUsers()
const imppatient = new patientsImport()
const adpatients = new addPatients()
const intake = new createNewIntake()

describe('Regression SUite', function () {
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

    })
    afterEach(() => {


        logoutp.profileMenu()
        logoutp.openlogOut()
        logoutp.clickOnlogOutButton()
    })
    it('Create New Client', function () {
        cy.fixture('ClientData').then((clientinfo) => {
            client.clientMenu()
            client.navAddClient()
            client.setAccounttype(clientinfo[0].AccountType)
            client.enterAccountID(clientinfo[0].AccountID)
            client.enterClientName(clientinfo[0].ClientName)
            client.setPriority(clientinfo[0].Priority)
            client.enterContactNo(clientinfo[0].ContactNo)
            client.enterFax(clientinfo[0].Fax)
            client.enterEmail(clientinfo[0].Email)
            client.enterStreetAddress(clientinfo[0].StreetAddress)
            client.enterZipCode(clientinfo[0].ZipCode)
            client.selectState(clientinfo[0].State)
            client.selectCity(clientinfo[0].City)
            client.selectInternalUser(clientinfo[0].InternalUser)
            client.selectDeliveryMethod()
            client.enterEncriptionCode(clientinfo[0].EncriptionCode)
            client.selectRequisitionType(clientinfo[0].RequisitionType)
            client.enterAllowedFileSize(clientinfo[0].AllowedFileSize)
            client.selectAttachmentType()
            client.selectAllowedFileType()
            client.clickOnNextBTN()
            client.clientCreationVerification()


            addExtuser.navManageClientUserTab()
            addExtuser.openUser()
            addExtuser.selectRoles(clientinfo[1].UserRole)
            addExtuser.enterNPI(clientinfo[1].Npi)
            addExtuser.enterUserEmail(clientinfo[1].UserEmail)
            addExtuser.selectPostNorminal(clientinfo[1].PostNominal)
            addExtuser.enterCuserFirstName(clientinfo[1].UserFirstname)
            addExtuser.enterCuserLastName(clientinfo[1].UserLastName)
            addExtuser.enterCuserContactNo(clientinfo[1].ContactNo)
            addExtuser.clickOnAddButton()
            addExtuser.verifyAddedUser(clientinfo[1].UserFirstname, clientinfo[1].UserLastName)

            addExtuser.enterClientProvidedEmail(clientinfo[1].UserEmail)
            addExtuser.enterClientProvidedFax(clientinfo[1].ClientProvidedFax)
            addExtuser.openUserAction()
            addExtuser.checkSuperUser()
            addExtuser.checkCPAccess()
            addExtuser.checkVisibleInCases()
            // addExtuser.checkActive()
            addExtuser.submit()
            client.searchClient(clientinfo[0].ClientName)
            client.verifyClientStatus(clientinfo[0].ClientStatus)

        })
    })

    it('Add New Patients', function () {
        cy.fixture('PatientDetail').then((patientdata) => {
            imppatient.openPatientMenu()
            imppatient.navManagePatient()
            imppatient.clickOnImportPatientBTN()
            imppatient.chooseFile(patientdata.PatientimportFile)
            imppatient.clickOnImportBTN()
            imppatient.validateFileimport(patientdata.ValidateSuccessfullyImportedFile)
            imppatient.downloadOutputFile()
            imppatient.closeimportPatientsPopUp()
            imppatient.openPatientMenu()
            adpatients.navAddPatient()
            adpatients.selectPClient(patientdata.Client)
            adpatients.enterSSN(patientdata.ssn)
            adpatients.enterPLastName(patientdata.Lastname)
            adpatients.enterPFirstName(patientdata.FirstName)
            adpatients.enterPDateOfBirth(patientdata.dob)
            adpatients.selectPGender(patientdata.gender)
            adpatients.enterPEmail(patientdata.email)
            adpatients.selectPPatientType(patientdata.Type)
            adpatients.selectPBillingInfo(patientdata.billinginfo)
            adpatients.selectPEthnicity(patientdata.ethnicity)
            adpatients.selectPRace(patientdata.race)
            adpatients.submitPatient()
            adpatients.validatePatientCreated(patientdata.Lastname)
            adpatients.collectSpecimen(patientdata.Specimen)
            adpatients.closePopUp()

        })

    })
    it('Case Accessioning by Bulk', function () {
        cy.fixture('CaseDetails').then((bulkdata) => {

            managecasesp.caseMenu()
            managecasesp.navToManageCases()
            cy.url().should('be.equal', 'https://nglisuat.siparadigm.com/manage-cases')
            bulk.readExcelFile()
            bulk.openbulkAccession()
            bulk.chooseBulkfile(bulkdata.BulkAccessionFilePath)
            bulk.clicOnImport()
            bulk.verifyFile()
            bulk.downloadOutputFile()
            bulk.closeBulk()

        })
    })
    it.only('Create New Intake and Scan Cases in Intake', function () {
        cy.fixture('IntakeData').then((int) => {
            intake.intakemenu()
            intake.navManageIntake()
            intake.clickcreatenewIntake()
            intake.selectinClient(int.Client)
            intake.selectinColby(int.CollecteBy)
            intake.enterinNotes(int.Notes)
            intake.enterEmptyKits(int.EmptyKit)
            intake.enterLeftKit(int.LeftKit)
            intake.enterNP(int.Np)
            intake.enterN(int.n)
            intake.enterOP(int.Op)
            intake.entersal(int.sal)
            intake.selectinattachFile(int.IntakeAttachmentPath)
            intake.verifyintakeattachfile()
            intake.submitintakeBtn()
            intake.submitinakepopup()
            intake.verifyAddIntakecy()

            // intake.intakemenu()
            // intake.navManageIntake()
            intake.openintake()
            intake.scanCase("252")
        })

    })
})