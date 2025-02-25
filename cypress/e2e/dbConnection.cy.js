describe('Database Connection Test', () => {
    it('should connect to the database successfully', () => {
        cy.task('connectDB').then((result) => {
            expect(result).to.equal('Connected');
        });
    });
});