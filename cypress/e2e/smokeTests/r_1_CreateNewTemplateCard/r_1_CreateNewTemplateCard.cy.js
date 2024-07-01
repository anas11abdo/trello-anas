
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CreateTemplateActions from "../../../Pageobjects/r_1_CreateNewTemplateCard/action.cy";
import CreateTemplateAssertion from "../../../Pageobjects/r_1_CreateNewTemplateCard/assertions.cy";

const createTemplateActions = new CreateTemplateActions();
const createTemplateAssertion = new CreateTemplateAssertion();


Given("the user login in trello website",()=>{
    cy.LoginToTrello();
    cy.wait(3000);
});

When("chooses the board",()=>{
    createTemplateActions.chooseTheBorad();
    cy.wait(6000);
});

When("clicks on card template list button",()=>{
    createTemplateActions.clicksOnCardTemplateListButton();
});

When("clicks on create new template card button",()=>{
    createTemplateActions.clicksOnCreateTemplateCardButton();
});

When("type card name",()=>{
    createTemplateActions.typeInCardName();
});

When("click on add button",()=>{
    createTemplateActions.clickOnAddButton();
});

Then("the card template should be created",()=>{
    createTemplateAssertion.checkTemplateCreated();
});