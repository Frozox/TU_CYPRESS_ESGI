describe('Supression de données', () => {
    it('clicks the link "type"', () => {
        cy.visit('http://127.0.0.1:8000/projects')

        cy.get('[title=delete]').first().click()
    })
})