/* global cy */

describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/nutrition')
    cy.clearLocalStorage()
  })

  it('shows header and text', () => {
    cy.get('div').should('exist')
    cy.get('h1').should('exist')

    cy.get('div')
      .should('contain', '25 bis unter 51')
      .should('exist')
  })
})
