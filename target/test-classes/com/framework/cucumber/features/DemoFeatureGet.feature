#Author: Sathish
Feature: GET: Automated Demo Tests
  Description: GET: purpose of this feature is to test the simple Get Feature.

  @get
  Scenario Outline: GET: Test the Simple GET Feature
    Given I want to set URL as "<URL>" for test case "<TestName>"
    When I set header content type as "<ContentType>"
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"

    Examples: 
      | TestName           | URL               | ContentType      | RequestBody | RequestMethod | StatusCode |
      | Simple GET Request | /api/users?page=2 | application/json |             | GET           |        200 |

  @getfail
  Scenario Outline: GET: Test the Simple GET Feature
    Given I want to set URL as "<URL>" for test case "<TestName>"
    When I set header content type as "<ContentType>"
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"

    Examples: 
      | TestName          | URL               | ContentType      | RequestBody | RequestMethod | StatusCode |
      |  Simple GET Reques| /api/users?page=3 | application/json |             | GET           |        201 |
