package com.framework.cucumber.stepdefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.response.ResponseBody;
import io.restassured.specification.RequestSpecification;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.util.logging.Logger;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.junit.Assert;

import com.aventstack.extentreports.Status;
import com.vimalselvam.cucumber.listener.Reporter;

public class stepdefinitions {
	private final static Logger logger = Logger.getLogger(stepdefinitions.class.getName());
	public static String apiEndPointUri;
	public static String testName;
	public static String CONTENT_TYPE;
	public static String STATUS_CODE;
	public static String FILE_PATH;
	public static String REQUESTBODY;
	public static String RESPONSEBODY;
	public static Response response;

	@Given("^I want to set URL as \"([^\"]*)\" for test case \"([^\"]*)\"$")
	public void i_want_to_set_URL_as_for_test_case(String URL, String testCaseName) throws Throwable {
		// Write code here that turns the phrase above into concrete actions

		Properties prop = new Properties();

		String configpath = System.getProperty("user.dir")
				+ "\\src\\test\\java\\com\\framework\\cucumber\\configuration\\configuration.properties";

		// String configpath =
		// "C:\\Users\\sathish\\Downloads\\API_AutomationV1.2\\Framework_Cucumber_RestAssured\\src\\test\\java\\com\\framework\\cucumber\\configuration\\";
		prop.load(new FileInputStream(configpath));
		String mybaseAPI = prop.getProperty("baseURL") + "/" + prop.getProperty("baseURLextn");
		System.out.println(mybaseAPI);
		// System.out.println("My basetest user name" + prop.getProperty("username"));

		String apiHostName = mybaseAPI;
		System.out.println(apiHostName);
		apiEndPointUri = String.format("%s%s", mybaseAPI, URL);
		testName = testCaseName;
		Reporter.addStepLog(Status.PASS + " :: Cucumber Hostname URL is :: " + apiEndPointUri);
		logger.info("Cucumber Hostname URL is :: " + apiEndPointUri);
		logger.info("Cucumber Test case name is :: " + testName);
	}

	@When("^I set header content type as \"([^\"]*)\"$")
	public void i_set_header_content_type_as(String contentType) throws Throwable {
		if (contentType != null && !contentType.isEmpty()) {
			CONTENT_TYPE = contentType;
			Reporter.addStepLog(Status.PASS + " :: content type is :: " + CONTENT_TYPE);
			logger.info("Content type is :: " + CONTENT_TYPE);
		} else {
			Reporter.addStepLog(Status.FAIL + " :: content type cannot be null or empty!");
			logger.info("Content type cannot be null or empty!");
		}

	}

	@And("^I hit the API with requestbody \"([^\"]*)\" and request method is \"([^\"]*)\"$")
	public void i_hit_the_API_with_requestbody_and_request_method_is(String requestBodyPath, String requestType)
			throws Throwable {
		// Write code here that turns the phrase above into concrete actions

		RestAssured.baseURI = apiEndPointUri;
		RequestSpecification request = RestAssured.given();
		request.header("Content-Type", CONTENT_TYPE);

		if (requestType.equalsIgnoreCase("GET")) {
			response = request.get();
		}
		STATUS_CODE = String.valueOf(response.getStatusCode());
		RESPONSEBODY = response.getBody().asString();
		Reporter.addStepLog(Status.PASS + " :: Request successfully processed");
		Reporter.addStepLog("Response is :: " + RESPONSEBODY);

	}

	@Then("^I try to verify the status code is \"([^\"]*)\"$")
	public void i_try_to_verify_the_status_code_is(String statusCode) throws Throwable {
		if (statusCode.equals(String.valueOf(STATUS_CODE))) {
			Assert.assertEquals(STATUS_CODE, statusCode);
			Reporter.addStepLog(Status.PASS + " :: Status Code is :: " + STATUS_CODE);
			logger.info("Status Code is :: " + STATUS_CODE);
		} else {
			Assert.assertEquals(STATUS_CODE, statusCode);
			Reporter.addStepLog(Status.FAIL + " :: Status Code is :: " + STATUS_CODE);
			logger.info("Status Code is not as expected :: " + STATUS_CODE);
		}

	}

	@And("^I try to verify the response value \"([^\"]*)\" is \"([^\"]*)\"$")
	public void verifyResponseValue(String responseKey, String value) throws Throwable {
		
		  RestAssured.baseURI = apiEndPointUri; RequestSpecification httpRequest =
		  RestAssured.given(); Response response = httpRequest.get(apiEndPointUri);
		  ResponseBody body = response.getBody(); String bodyStringValue =
		  body.asString();
		  
		  // Validate if Response Body Contains a specific String
		  Assert.assertTrue(bodyStringValue.contains("employee_name"));
		  //Assert.assertTrue(bodyStringValue.contains("employee_salary"));
		 

	}

	private void compareResponseValues(String expected, String actual, String responseKey) {
		Reporter.addStepLog("Actual Value is  ::" + actual);
		Reporter.addStepLog("Expected Value is  ::" + expected);
		logger.info("Actual Value is  ::" + actual);
		logger.info("Expected Value is  ::" + expected);
		if (expected.equals(actual)) {
			Assert.assertEquals(actual, expected);
			Reporter.addStepLog(Status.PASS + " " + responseKey + " : Expected value : " + expected
					+ " mathches with Actual Value : " + actual);
		} else {
			Reporter.addStepLog(Status.FAIL + " " + responseKey + " : Expected value : " + expected
					+ " do not matches with Actual Value : " + actual);
			Assert.assertEquals(actual, expected);
		}
	}

}
