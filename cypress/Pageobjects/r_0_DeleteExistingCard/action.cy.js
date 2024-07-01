class DeleteCardActions{
    chooseTheBorad(){
        cy.origin("https://trello.com",()=>{
            cy.get('.boards-page-board-section-list-item').eq(0).click();
            });
    return this;
    }
    clicksOnTheCard(){
    cy.origin("https://trello.com",()=>{
        cy.get('[data-testid="trello-card"]').eq(0).click();
        });
return this;
}
clicksOnCardArchiveButton(){
    cy.origin("https://trello.com",()=>{
        cy.get('[data-testid="card-back-archive-button"]').click();
        });
return this;
}
clicksOnCardDeleteCardButton(){
    cy.origin("https://trello.com",()=>{
        cy.get('[data-testid="card-back-delete-card-button"]').click();
        });
return this;
}
clicksOnSubmitDeleteButton(){
    cy.origin("https://trello.com",()=>{
        cy.get('[type="submit"]').click();
        });
return this;
}
}

export default DeleteCardActions;