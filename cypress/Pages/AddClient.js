/// <reference types="cypress" />

class addNewClient {
    clientMenu() {
        const clmenu = cy.get('#accordionSidebar > li:nth-child(5) > a > span')
        clmenu.click()
    }
    navAddClient() {
        const openAddClient = cy.get('[featurecode=CLTA-AC]')
        openAddClient.click()
    }
    setAccounttype(acct) {
        const acctype = cy.get('#addclient-detail > div.card.shadow.mb-2 > form > div.card-body > div:nth-child(2) > div:nth-child(1) > ng-select > div > div > div.ng-input > input[type=text]')
        acctype.type(acct).type('{enter}').wait(2000)
    }
    enterAccountID(aID) {
        const accid = cy.get('[name=accountId]')
        accid.type(aID).wait(1000)
    }
    enterClientName(clientn) {
        const clname = cy.get('[name=clientName]')
        clname.type(clientn).wait(1000)
    }
    setPriority(prty) {
        const pr = cy.get('[bindlabel=priorityName]')
        pr.type(prty).type('{enter}').wait(1000)
    }
    enterStreetAddress(stadd) {
        const strtaddres = cy.get('[name=streetAddress]')
        strtaddres.type(stadd)
    }
    enterZipCode(zpcode) {
        const zip = cy.get('[name=zip]')
        zip.type(zpcode)
    }
    selectState(state) {
        const sstate = cy.get('[bindlabel=stateName]')
        sstate.type(state).type('{enter}').wait(1000)
    }
    selectCity(ctyname) {
        const city = cy.get('[bindlabel=cityName]')
        city.type(ctyname).type('{enter}').wait(1000)

    }
    selectInternalUser(inuser) {
        const intuser = cy.get('[name=internalUser]')
        intuser.select(inuser).contains(inuser)
    }
    selectDeliveryMethod() {
        const emaildmethod = cy.get('input[type=checkbox][value="1"]')
        emaildmethod.check().should('be.checked')
        const faxdmethod = cy.get('input[type=checkbox][value="2"]')
        faxdmethod.check().should('be.checked')
    }
    enterEncriptionCode(encode) {
        const enrcode = cy.get('[name=encryption]')
        enrcode.type(encode).should('have.value', encode)
    }
    selectRequisitionType(reqtype) {
        const requisition = cy.get('[bindlabel=requisitionTypeName]')
        requisition.type(reqtype).type('{enter}')
    }
    enterAllowedFileSize(filesize) {
        const fsize = cy.get('[name=fileSize]')
        fsize.type(filesize).should('have.value', filesize)
    }
    selectAttachmentType() {
        const attachtype = cy.get('[bindlabel=attachmentTypeName]')
        attachtype.type('intake').type('{enter}')
        attachtype.type('clin').type('{enter}')

    }
    selectAllowedFileType() {
        const filetype = cy.get('#addclient-detail > div.card.shadow.mb-2 > form > div.card-body > div:nth-child(12) > div:nth-child(4) > div > ng-select')
        filetype.type('pdf').type('{enter}')
        filetype.type('jpg').type('{enter}')
    }
    enterContactNo(cno) {
        const contact = cy.get('#PHONE-0')
        contact.type(cno)
    }
    enterFax(fno) {
        const faxno = cy.get('#FAX-0')
        faxno.type(fno)
    }
    enterEmail(emid) {
        const emialID = cy.get('#EMAIL-0')
        emialID.type(emid)
    }
    clickOnNextBTN() {
        const nextbtn = cy.get('button[type=submit]')
        nextbtn.click().wait(3000)
    }
    clientCreationVerification() {
        const pagediv = cy.get('#content > div > div > div')
        pagediv.should('contain', 'Users').log('client successfully created')
    }
    searchClient(clientname){
        cy.get('[type=search]').type(clientname).wait(1000)
    }
    verifyClientStatus(clientstatus){
        cy.get('#clients > tbody > tr:nth-child(1) > td:nth-child(6)')
        .contains('td',clientstatus).should('be.visible')
    }

}
export default addNewClient