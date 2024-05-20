/* eslint-disable no-undef */
/**
 * Test Scenarios
 *
 * - Login spec
 *   - should display register page correctly
 *   - should prevent login when email and password are empty
 *   - should prevent login when invalid email format
 *   - should move to homepage while login success
 *   - should move to login page if logout success
 */
import { faker } from '@faker-js/faker'

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/login')
  })

  it('should display login page correctly', () => {
    cy.get('[type=email]').should('be.visible')
    cy.get('[type=password]').should('be.visible')
    cy.get('button[type="submit"]').should('be.visible')
  })

  it('should prevent login when email and password are empty', () => {
    cy.get('button[type="submit"]').click()
    cy.url().should('eq', 'http://localhost:5173/login')
  })

  it('should prevent login when invalid email format', () => {
    cy.get('[type=email]').type('test')
    cy.get('[type=password]').type('test123')
    cy.get('button[type="submit"]').click()
    cy.url().should('eq', 'http://localhost:5173/login')
  })

  it('should move to homepage while login success', () => {
    cy.get('[type=email]').type('hitam@mail.com')
    cy.get('[type=password]').type('hitam123')
    cy.get('button[type="submit"]').click()
    cy.url().should('eq', 'http://localhost:5173/')
  })

  it('should move to login page if logout success', () => {
    cy.get('[type=email]').type('hitam@mail.com')
    cy.get('[type=password]').type('hitam123')
    cy.get('button[type="submit"]').click()

    cy.url().should('eq', 'http://localhost:5173/')

    cy.get('button').contains('Logout').click()
    cy.url().should('eq', 'http://localhost:5173/login')
  })
})
