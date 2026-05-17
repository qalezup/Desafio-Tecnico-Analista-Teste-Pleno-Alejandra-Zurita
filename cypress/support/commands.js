
Cypress.Commands.add('getProductsList', () => {
  return cy.request({
    method: 'GET',
    url: 'https://automationexercise.com/api/productsList'
  }).then((response) => {
    const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
    return {
      status: response.status,
      body
    }
  })
})