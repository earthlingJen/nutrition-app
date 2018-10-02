/* global cy */

xdescribe('App', () => {
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

describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/planning')
    cy.clearLocalStorage()
  })

  it('shows header and text', () => {
    cy.get('div')
      .should('exist')
      .should('contain', 'Plane')
    cy.get('h1').should('exist')
  })

  it('changes food types', () => {
    cy.get('select').select('Obst')
  })

  it('adds nutriValues', () => {
    cy.get('div')
      .contains('Spinat')
      .click()
      .get('div')
      .contains('58.00')
  })

  it('adds food to list', () => {
    cy.get('div')
      .contains('Spinat')
      .click()
      .get('li')
      .contains('100g Spinat')
  })

  it('adds next item on top of list', () => {
    cy.get('div')
      .contains('Spinat')
      .click()
      .get('div')
      .contains('Brokkoli')
      .click()
      .get('li')
      .first()
      .contains('Brokkoli')
  })

  it('shows right percentage and color', () => {
    cy.get('div')
      .contains('Spinat')
      .click()
      .get('div')
      .contains('19%')
      .get('circle.top ')
      .should('have.css', 'stroke')
      .and('equal', 'rgb(255, 0, 0)')
  })
})
