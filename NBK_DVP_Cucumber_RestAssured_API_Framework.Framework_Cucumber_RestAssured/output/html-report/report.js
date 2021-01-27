$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DemoFeatureGet.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Sathish"
    }
  ],
  "line": 2,
  "name": "GET: Automated Demo Tests",
  "description": "Description: GET: purpose of this feature is to test the simple Get Feature.",
  "id": "get:-automated-demo-tests",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "GET: Test the Simple GET Feature",
  "description": "",
  "id": "get:-automated-demo-tests;get:-test-the-simple-get-feature",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I try to verify the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "get:-automated-demo-tests;get:-test-the-simple-get-feature;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "ContentType",
        "RequestBody",
        "RequestMethod",
        "StatusCode"
      ],
      "line": 13,
      "id": "get:-automated-demo-tests;get:-test-the-simple-get-feature;;1"
    },
    {
      "cells": [
        "Simple GET Request",
        "/api/users?page\u003d2",
        "application/json",
        "",
        "GET",
        "200"
      ],
      "line": 14,
      "id": "get:-automated-demo-tests;get:-test-the-simple-get-feature;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "GET: Test the Simple GET Feature",
  "description": "",
  "id": "get:-automated-demo-tests;get:-test-the-simple-get-feature;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to set URL as \"/api/users?page\u003d2\" for test case \"Simple GET Request\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I hit the API with requestbody \"\" and request method is \"GET\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I try to verify the status code is \"200\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/users?page\u003d2",
      "offset": 22
    },
    {
      "val": "Simple GET Request",
      "offset": 56
    }
  ],
  "location": "stepdefinitions.i_want_to_set_URL_as_for_test_case(String,String)"
});
formatter.result({
  "duration": 323721700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "stepdefinitions.i_set_header_content_type_as(String)"
});
formatter.result({
  "duration": 4614700,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.framework.cucumber.stepdefinitions.stepdefinitions.i_set_header_content_type_as(stepdefinitions.java:37)\r\n\tat ✽.When I set header content type as \"application/json\"(DemoFeatureGet.feature:8)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    },
    {
      "val": "GET",
      "offset": 57
    }
  ],
  "location": "stepdefinitions.i_hit_the_API_with_requestbody_and_request_method_is(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "stepdefinitions.i_try_to_verify_the_status_code_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "GET: Test the Simple GET Feature",
  "description": "",
  "id": "get:-automated-demo-tests;get:-test-the-simple-get-feature",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@getfail"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I try to verify the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "get:-automated-demo-tests;get:-test-the-simple-get-feature;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "ContentType",
        "RequestBody",
        "RequestMethod",
        "StatusCode"
      ],
      "line": 24,
      "id": "get:-automated-demo-tests;get:-test-the-simple-get-feature;;1"
    },
    {
      "cells": [
        "Simple GET Reques",
        "/api/users?page\u003d3",
        "application/json",
        "",
        "GET",
        "201"
      ],
      "line": 25,
      "id": "get:-automated-demo-tests;get:-test-the-simple-get-feature;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "GET: Test the Simple GET Feature",
  "description": "",
  "id": "get:-automated-demo-tests;get:-test-the-simple-get-feature;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@getfail"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I want to set URL as \"/api/users?page\u003d3\" for test case \"Simple GET Reques\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I hit the API with requestbody \"\" and request method is \"GET\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I try to verify the status code is \"201\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/users?page\u003d3",
      "offset": 22
    },
    {
      "val": "Simple GET Reques",
      "offset": 56
    }
  ],
  "location": "stepdefinitions.i_want_to_set_URL_as_for_test_case(String,String)"
});
formatter.result({
  "duration": 1755800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "stepdefinitions.i_set_header_content_type_as(String)"
});
formatter.result({
  "duration": 292100,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.framework.cucumber.stepdefinitions.stepdefinitions.i_set_header_content_type_as(stepdefinitions.java:37)\r\n\tat ✽.When I set header content type as \"application/json\"(DemoFeatureGet.feature:19)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    },
    {
      "val": "GET",
      "offset": 57
    }
  ],
  "location": "stepdefinitions.i_hit_the_API_with_requestbody_and_request_method_is(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "stepdefinitions.i_try_to_verify_the_status_code_is(String)"
});
formatter.result({
  "status": "skipped"
});
});