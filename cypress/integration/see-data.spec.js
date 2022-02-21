describe('Visualisation des données', () => {
    it('clicks the link "type"', () => {
        cy.visit('http://127.0.0.1:8000/projects')

        cy.get('form>a').eq(0).click()

        cy.get('.btn-primary').first().click()
    })
})