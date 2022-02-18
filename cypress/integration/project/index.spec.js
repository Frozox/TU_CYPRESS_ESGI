
const url = 'http://localhost:81/projects';

describe('indexProjects', () => {
    beforeEach(() => {
        cy.visit(url);
    })

    it('should display_table', function () {
        cy.get('table').should('have.class','table-striped table-bordered table-responsive-lg');
    });

    it('should have_pagination', function () {
        cy.get('nav').should('have.','role','navigation')
    });
});
