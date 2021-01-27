#Author: Sathish
Feature: PUT: Sample PUT Demo
  Description: PUT: The purpose of this feature is to test Sample PUT Request

  @put
  Scenario Outline: PUT: Test the Sample PUT Reuest
    Given I want to set URL as "<URL>" for test case "<TestName>"
    When I set header content type as "<ContentType>"
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"
    #And I try to verify the response value "name" is "morpheus"
    #And I try to verify the response value "job" is "zion resident"

    Examples: 
      | TestName  | URL                     | ContentType      | RequestBody            | RequestMethod | StatusCode |
      | Demo test | /public/api/v1/update/4 | application/json | testdata/testput.json | PUT            |        201 |

 