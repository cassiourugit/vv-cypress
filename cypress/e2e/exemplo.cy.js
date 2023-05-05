import { el } from '../support/pages/exemplo/index';

describe('Exemplo', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io')

    // Valida se a página contém algum texto com o nome "type" e clica nele
    cy.contains('type').click()

    // Deve abrir uma nova URL que contenha '/commands/actions'
    cy.url().should('include', '/commands/actions')
    
    // Procura pelo campo de email e digita o texto 'fake@email.com'
    cy.get(el.campo_email).type('fake@email.com')
    
    // Valida se a propriedade value do campo recebey o texto 'fake@email.com'
    cy.get(el.campo_email).should('have.value', 'fake@email.com')
  })
})