Feature: Entrypoint

  Scenario: Using GitHub API
    When I GET /
    Then response status code should be 200
    And response should match fixture entrypoint_response