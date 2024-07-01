
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import DeleteCardActions from "../../../Pageobjects/r_0_DeleteExistingCard/action.cy";
import DeleteCardAssertion from "../../../Pageobjects/r_0_DeleteExistingCard/assertions.cy";

const deleteCardActions = new DeleteCardActions();
const deleteCardAssertion = new DeleteCardAssertion();


Given("the user login in trello website",()=>{
    cy.LoginToTrello();
    cy.wait(3000);
});

When("chooses the board",()=>{
    deleteCardActions.chooseTheBorad();
    cy.wait(6000);
});

When("clicks on the card",()=>{
    deleteCardActions.clicksOnTheCard();
});

When("clicks on card back archive button",()=>{
    deleteCardActions.clicksOnCardArchiveButton();
});

When("clicks on card back delete card button",()=>{
    deleteCardActions.clicksOnCardDeleteCardButton();
});

When("clicks on submit delete button",()=>{
    deleteCardActions.clicksOnSubmitDeleteButton();
});

Then("the card will be archived and deleted succssfuly",()=>{
    deleteCardAssertion.checkCardDelete();
});