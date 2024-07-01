class DeleteCardAssertion{
    checkCardDelete(){
        cy.origin("https://trello.com",()=>{
            cy.get('[data-testid="trello-card"]').eq(1).should('not.exist')
            //should('be.visible');
            });
    return this;
    }
    }
    export default DeleteCardAssertion;