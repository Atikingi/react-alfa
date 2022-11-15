describe('users cards actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/react-alfa');
  });

  it('should change color then click favorite button', () => {
    cy.findAllByTestId('add').as('favoriteButton');

    cy.get('@favoriteButton').first().should('be.visible').click();
    cy.get('@favoriteButton')
      .first()
      .should('have.css', 'color', 'rgb(239, 49, 36)');
    cy.get('@favoriteButton').first().should('be.visible').click();
    cy.get('@favoriteButton')
      .first()
      .should('have.css', 'color', 'rgb(60, 76, 93)');
  });

  it('should delete card when delete button was clicked', () => {
    cy.findAllByTestId('delete').as('deleteButton');
    cy.findAllByTitle('User card').should('have.length', '6').as('userCard');

    cy.get('@deleteButton').first().should('be.visible').click();
    cy.get('@userCard').should('have.length', '5');
  });

  it('should added to favorite after click on favorite button', () => {
    cy.findAllByTestId('add').as('favoriteButton');
    cy.findByText('Show favorite').as('switchToFavoriteButton');
    cy.findAllByTitle('User card').as('userCard');

    cy.get('@favoriteButton').first().should('be.visible').click();
    cy.get('@switchToFavoriteButton').click();
    cy.get('@userCard').should('have.length', 1);

    cy.findByText('Show all').click();
    cy.get('@userCard').should('have.length', 12);
  });

  it('should refresh user card and set count 6', () => {
    cy.findByText('Refresh').as('refreshButton');
    cy.findAllByTitle('User card').as('userCard');

    cy.get('@refreshButton').click();
    cy.get('@userCard').should('have.length', 6);
  });
});
