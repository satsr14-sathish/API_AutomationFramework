#Author: Sathish
Feature: GET: Automated Demo Tests
  Description: GET: purpose of this feature is to test the simple Get Feature.

  @get
  Scenario Outline: GET: Test the Simple GET Feature
    Given I want to set URL as "<URL>" for test case "<TestName>"
    When I set header content type as "<ContentType>"
    And I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"
    #And I try to verify the response value "employee_name" is "Tiger Nixon"
    #And  I try to verify the response value "employee_salary" is "320800"

    Examples: 
      | TestName           | URL                | ContentType      | RequestBody | RequestMethod | StatusCode |
      | Simple GET Request | /api/v1/employee/1 | application/json |             | GET           |       200  |

  