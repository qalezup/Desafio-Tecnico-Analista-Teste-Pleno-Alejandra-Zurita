import { cartLocators, productsLocators } from '../locators/locators'

class CartPage {

  viewCart() {
    cy.contains(productsLocators.viewCart).click()
  }

  openCart() {
    cy.contains('a', 'Cart').click()
  }

  proceedToCheckout() {
    cy.get(cartLocators.checkoutBtn).click()
  }

  goToRegisterLogin() {
    cy.contains('a', 'Register / Login').click()
  }
}

export default new CartPage()