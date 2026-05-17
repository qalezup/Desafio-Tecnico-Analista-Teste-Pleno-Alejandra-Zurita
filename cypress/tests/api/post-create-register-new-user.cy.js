import { buildUserFromFixture} from '../../support/dataFactory'

describe('api/Create Account New User', () => {

  it('Should create user successfully', () => {

    cy.fixture('create-account.json').then((payload) => {

      const user = buildUserFromFixture(payload)

      cy.createAccount(user).then((response) => {

        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('message','User created!')
      })
    })
  })

  it('Should NOT create user with invalid email', () => {

    cy.fixture('create-account.json').then((payload) => {

      const user = buildUserFromFixture(payload)

      user.email = 'plainTextEmail'

      cy.createAccount(user).then((response) => {

      expect(response.status).to.eq(400)
      })
    })
  })
})