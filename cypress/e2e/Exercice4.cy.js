describe('Validations Exercice 4: ', () => {
  beforeEach(() => {
    cy.visit("https://julien-ba.github.io/project8/Exercice4");
  })

  it('Displays \'Bonjour, vous avez cliqué sur le bouton !\'', () => {
    cy.contains('Cliquez ici').click()
    cy.get('p').should('exist')
    cy.contains('p', 'Bonjour, vous avez cliqué sur le bouton !')
  })
})
