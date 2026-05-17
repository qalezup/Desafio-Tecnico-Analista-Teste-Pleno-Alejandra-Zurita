import ProductsPage from '../../pages/productPage'
import CartPage from '../../pages/cartPage'
import AuthPage from '../../pages/registerPage'
import cartPage from '../../pages/cartPage'
import { productsLocators } from '../../locators/locators'
import PaymentPage from '../../pages/paymentPage'
import { buildUserFromFixture } from '../../support/dataFactory'

describe('e2e frontend - purchase flow', () => {

  it('complete purchase flow', () => {
  cy.fixture('create-account.json').then((payload) => {

    const user = buildUserFromFixture(payload)
    ProductsPage.visit()
    ProductsPage.verifyPage()

    ProductsPage.addProduct('Sleeveless Dress')
    ProductsPage.closeModal()
    ProductsPage.addProduct('Stylish Dress')

    CartPage.viewCart()
    CartPage.proceedToCheckout()
    CartPage.goToRegisterLogin()

    AuthPage.openSignup(
        user.name,
        user.email
      )

      AuthPage.fillForm({
        day: user.birth_date,
        month: user.birth_month,
        year: user.birth_year,
        firstName: user.firstname,
        lastName: user.lastname,
        password: user.password,
        address: user.address1,
        country: user.country,
        state: user.state,
        city: user.city,
        zipcode: user.zipcode,
        mobile: user.mobile_number
      })

  

    AuthPage.createAccount()
    AuthPage.continue()
    CartPage.openCart()
    CartPage.proceedToCheckout()
    CartPage.proceedToCheckout()

    PaymentPage.fillCard({
    name: user.name,
    number: user.card.number,
    cvc: user.card.cvc,
    month: user.card.month,
    year: user.card.year
    })

    PaymentPage.submit()
    PaymentPage.verifyOrder()
  })
  })
})