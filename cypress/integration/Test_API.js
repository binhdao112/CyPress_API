describe('Test API', () => {
    it('Request', () => {
        cy.server()
        cy.log('fixtures:data2.json')
        cy.route('/entries', 'fixture:data.json').as("GET")
        cy.visit("/")
    });
});