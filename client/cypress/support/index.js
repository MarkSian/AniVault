Cypress.Commands.add('checkDBConnection', () => {
	cy.request('GET', '/api/db-status').then((response) => {
		expect(response.status).to.eq(200);
		expect(response.body).to.have.property('connected', true);
	});
});