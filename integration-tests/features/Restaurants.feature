Feature: 
    As a tourist
    I want a list of restaurants in Stockholm
    So that I don't starve

    Scenario: Happy Path
        Given I set Accept header to application/json
        And I set the current time as a header
        And i have 5 something
        When I GET /restaurants
        Then response code should be 200
        And response body should be valid json
        And response body path $.restaurants[0].name should be The (.*) Door
