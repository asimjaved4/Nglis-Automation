/// <reference types="cypress" />
import login from "../../../Pages/loginPage"
import logout from "../../../Pages/logoutPage"


const logn = new login()
const lgout = new logout()
describe('Test Login', function () {
    before(() => {

        cy.fixture('inValidLoginDetails').as('users')

    })
    beforeEach(() => {
        logn.navigate('login')
    })
    it('Login with invalid Credentials', function () {
        cy.get(this.users).each((data) => {
            logn.enterUsername(data.username)
            logn.enterPassword(data.password)
            logn.submit()
            cy.url().should('not.be.equal', 'https://nglisuat.siparadigm.com/')
        })
    })

    it.skip('Login with Valid Credentials', function () {
        
        logn.enterUsername("atest")
        logn.enterPassword("Atest12345*")
        logn.submit()
        cy.url().should('be.equal', 'https://nglisuat.siparadigm.com/')
        lgout.profileMenu()
        lgout.openlogOut()
        lgout.clickOnlogOutButton()
    })
   
   

})