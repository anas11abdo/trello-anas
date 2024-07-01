class CreateTemplateAssertion{
    checkTemplateCreated(){
        cy.origin("https://trello.com",()=>{
            cy.get('[data-testid="badge-card-template"]').should('be.visible')
            //should('be.visible');
            });
    return this;
    }
    }
    export default CreateTemplateAssertion;