class CreateBoardActions{
//method
clickOnCreateButton(){
    cy.origin("https://trello.com",()=>{
        cy.get('[data-testid="AddIcon"]').click();
        });
    return this;
}
clickOnCreateBorardButton(){
    cy.origin("https://trello.com",()=>{
        cy.get('[data-testid="BoardIcon"]').eq(1).click();
        });
return this;
}
}
export default CreateBoardActions;