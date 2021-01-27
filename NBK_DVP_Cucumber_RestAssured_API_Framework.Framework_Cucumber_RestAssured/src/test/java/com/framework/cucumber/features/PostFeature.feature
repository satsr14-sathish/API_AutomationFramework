#Author: Sathish
Feature: POST: Simple POST Request 
  Description: POST: The purpose of this feature is to test Simple POST Request

  @post
  Scenario Outline: POST: Test the Sampple post request
    Given I want to set URL as "<URL>" for test case "<TestName>"
    When I set header content type as "<ContentType>"
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"
    #And I try to verify the response value "name" is "morpheus"
    #And I try to verify the response value "job" is "leader"
    #And I try to verify the response value "id" is "55"

    Examples: 
      | TestName            | URL           | ContentType      | RequestBody        | RequestMethod | StatusCode |
      | Sample POST Request |/api/v1/create | application/json | testdata\test.json | POST          |        201 |

  