class CreateTemplateActions{
    chooseTheBorad(){
        cy.origin("https://trello.com",()=>{
            cy.get('.boards-page-board-section-list-item').eq(0).click();
            });
    return this;
    }
    clicksOnCardTemplateListButton(){
    cy.origin("https://trello.com",()=>{
        cy.get('[data-testid="TemplateCardIcon"]').eq(0).click();
        });
return this;
}
clicksOnCreateTemplateCardButton(){
    cy.origin("https://trello.com",()=>{
        cy.get('[data-testid="create-new-template-card-button"]').click();
        });
return this;
}
typeInCardName(){
    cy.origin("https://trello.com",()=>{
        cy.get('[data-testid="create-template-card-composer"]').type("template card");
        });
return this;
}
clickOnAddButton(){
    cy.origin("https://trello.com",()=>{
        cy.get('[data-testid="new-template-card-submit-button"]').click();
        cy.wait(2000)
        cy.get('[data-testid="CloseIcon"]').click();
        });
return this;
}
}

export default CreateTemplateActions;