import { authLocators } from '../locators/locators'

class AuthPage {

  openSignup(name, email) {
    cy.get(authLocators.signupName).type(name)
    cy.get(authLocators.signupEmail).type(email)
    cy.get(authLocators.signupButton).click()
  }

  fillForm(data) {

    cy.get(authLocators.gender).check()
    cy.get(authLocators.days).select(data.day)
    cy.get(authLocators.months).select(data.month)
    cy.get(authLocators.years).select(data.year)

    cy.get(authLocators.firstName).click().type(data.firstName)
    cy.get(authLocators.lastName).click().type(data.lastName)
    cy.get(authLocators.password).click().type(data.password)

    cy.get(authLocators.address1).click().type(data.address)
    cy.get(authLocators.country).select(data.country)
    cy.get(authLocators.state).click().type(data.state)
    cy.get(authLocators.city).click().type(data.city)
    cy.get(authLocators.zipcode).click().type(data.zipcode)
    cy.get(authLocators.mobile).click().type(data.mobile)
  }

  createAccount() {
    cy.get(authLocators.createAccountBtn).click()
  }

  continue() {
    cy.get(authLocators.continueBtn).click()
  }
}

export default new AuthPage()