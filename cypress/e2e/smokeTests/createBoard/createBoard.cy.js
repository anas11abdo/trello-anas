
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CreateBoardActions from "../../../Pageobjects/createBoard/action.cy";

const createBoardActions = new CreateBoardActions();


Given("the user login in trello website",()=>{
    cy.LoginToTrello();
    cy.wait(3000);
});



When("clicks on create button",()=>{
    createBoardActions.clickOnCreateButton();
});

When("chooses create board option",()=>{
    createBoardActions.clickOnCreateBorardButton();
});

When("types in board title input filed the board name",()=>{
    
});

When("chooses workspace",()=>{
    
});

When("clicks on Create button",()=>{
    
});

Then("the board will be crated succssfuly",()=>{
    
});