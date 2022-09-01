Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Rithelle')
    cy.get('#lastName').type('Celestrino')
    cy.get('#email').type('exemplo@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('.button[type="submit"]').click()
})