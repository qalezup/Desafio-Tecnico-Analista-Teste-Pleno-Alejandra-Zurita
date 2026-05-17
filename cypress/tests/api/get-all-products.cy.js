describe('api/Get All Products List', () => {

 beforeEach(() => {
     cy.getProductsList().then((response) => {
      cy.wrap(response.body.products).as('bodyProducts')
      cy.wrap(response.status).as('status')
    })
  }) 

  it('Should return status code 200', () => {
    cy.get('@status').should('eq', 200)
  })

  it('Should return a non-empty products list', () => {
    cy.get('@bodyProducts').then((products) => {
      expect(products).to.exist
      expect(products.length).to.be.greaterThan(0)
    })
  })

  it('Should validate product attributes', () => {
    cy.get('@bodyProducts').then((products) => {
      products.forEach((product) => {
        const productCategory = product.category
        const userType = productCategory.usertype

        expect(product).to.have.property('id')
        expect(product).to.have.property('name')
        expect(product).to.have.property('price')
        expect(product).to.have.property('brand')
        expect(product).to.have.property('category')

        expect(productCategory).to.have.property('category')
        expect(productCategory).to.have.property('usertype')

        expect(userType).to.have.property('usertype')
      })
    })
  })

  it('Should validate product data types', () => {
    cy.get('@bodyProducts').then((products) => {
      products.forEach((product) => {
        const productCategory = product.category
        const userType = productCategory.usertype.usertype

        expect(product.id).to.be.a('number')
        expect(product.name).to.be.a('string')
        expect(product.price).to.be.a('string')
        expect(product.brand).to.be.a('string')

        expect(productCategory.category).to.be.a('string')

        expect(userType).to.be.a('string')

        expect(userType).to.be.oneOf([
          'Women',
          'Men',
          'Kids'
        ])
      })
    })
  })

})