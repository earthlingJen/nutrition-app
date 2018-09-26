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

  it('displays correct value', () => {
    cy.get('select')
      .last()
      .should('exist')
      .select('15to18')
    cy.get('div')
      .should('contain', 'Kalzium')
      .should('contain', '1200')
  })

  it('leads to planning screen', () => {
    cy.get('div')
      .contains('Eisen')
      .click()
      .request('http://localhost:3000/planning')
      .get('h1')
      .contains('Plane - Eisen')
      .get('div')
      .contains('0.00 / 15')
  })
})
