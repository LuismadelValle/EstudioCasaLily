describe('Accessing main interface', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  context('Review links', () => {
    it('Navbar links', () => {
      cy.get('.navbar-brand').should('have.attr', 'href').and('include', '/')

      cy.get('.nav-link').then(($links) => {
        var linksLength = $links.length

        for(let i = 0; i < linksLength; i++){
          cy.get('.nav-link').eq(i).should('have.attr', 'href').and('match', /\D{1,}/)
        }
      })

      cy.get('.dropdown-toggle').click()

      cy.get('li[role="presentation"]').its('length').should('be.gte', 1)
    })
  })
})