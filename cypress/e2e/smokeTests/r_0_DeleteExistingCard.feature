Feature: delete existing Card

    Scenario: validate that the user can delete existing card
    Given the user login in trello website
    When chooses the board 
    And clicks on the card
    And clicks on card back archive button
    And clicks on card back delete card button
    And clicks on submit delete button
    Then the card will be archived and deleted succssfuly