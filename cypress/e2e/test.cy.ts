describe('cypress-plugin-multiple-click', () => {
  beforeEach(() => {
    cy.visit('cypress/e2e/index.html');
  });

  it('should check if plugin is installed', () => {
    expect(cy).property('clicks').to.be.a('function');
  });

  it('should click on plus button 3 times', () => {
    cy.get('#count').should('have.text', 0).as('count');
    cy.get('#increase').clicks(3);
    cy.get('@count').should('have.text', 3);
  });
});
