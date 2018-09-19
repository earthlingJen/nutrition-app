/* global cy */

describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/nutrition')
    cy.clearLocalStorage()
  })

  xit('shows header and text', () => {
    cy.get('div').should('exist')
    cy.get('h1').should('exist')

    cy.get('div')
      .should('contain', '25 bis unter 51')
      .should('exist')
  })

  it('shows nutriScreen ', () => {
    cy.get('select')
      .first()
      .should('exist')
      .select('männlich')
    cy.get('div')
      .should('contain', 'Magnesium')
      .should('contain', '350')

    cy.get('select')
      .first()
      .select('weiblich')
    cy.get('div')
      .should('contain', 'Magnesium')
      .should('contain', '300')
  })
})
