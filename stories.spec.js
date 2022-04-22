/// <reference types="cypress" />

describe('todolist', () => {

  beforeEach(() => {

    cy.visit('https://flask.io/new')
  })

  it('has fields for tasks', () => {

    cy.get('input[id="list_tasks_attributes_0_description"]').should('be.visible')
  })

  it('can save tasks', () => {

    cy.get('input[id="list_tasks_attributes_0_description"]').type('test task {enter}')
    cy.contains('test task').should('be.visible')
  })
  
  it('can delete tasks', () => {

    cy.get('input[id="list_tasks_attributes_0_description"]').type('test task {enter}')
    cy.contains('test task').should('be.visible')
    cy.get('form[class="edit_task"]').children('ul').children('li[class="delete"]').children().children().click()
    cy.contains('test task').should('not.exist')
  })

  it('can update tasks', () => {

    cy.get('input[id="list_tasks_attributes_0_description"]').type('test task {enter}')
    cy.contains('test task').should('be.visible')
    cy.contains('test task').type('updated')
    cy.get('body').click()
    cy.contains('updated').should('be.visible')
  })
    })