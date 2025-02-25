describe('Database Connection Test', () => {
    it('should connect to the database', () => {
        cy.request('GET', '/api/test-db-connection')
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('message', 'Database connection successful');
            });
    });
});