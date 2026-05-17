export function buildUserFromFixture(payload) {

  const firstName = payload.firstname
  const lastName = Cypress.randomLastName(6)
  const fullName = Cypress.buildFullName(firstName, lastName)
  const email = Cypress.buildEmail(firstName, lastName)

  return {
    ...payload,
    lastname: lastName,
    name: fullName,
    email
  }
}