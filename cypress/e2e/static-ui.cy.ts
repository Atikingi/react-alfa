describe('static ui', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/react-alfa');
  });

  it('displays static ui elements', () => {
    cy.findByText('Refresh');
    cy.findByText('Show favorite');
  });
});
