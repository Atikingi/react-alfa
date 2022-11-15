describe('render users from API', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/react-alfa');
  });

  it('should render users cards with buttons', () => {
    cy.findByText('Refresh').click();
    cy.findAllByTitle('User card').should('have.length', '6');
    cy.findAllByTitle('delete').should('have.length', '6');
    cy.findAllByTitle('add').should('have.length', '6');
  });
});
