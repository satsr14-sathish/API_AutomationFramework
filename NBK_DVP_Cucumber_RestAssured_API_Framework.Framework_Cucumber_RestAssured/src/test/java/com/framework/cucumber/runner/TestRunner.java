package com.framework.cucumber.runner;

import java.io.File;
import java.io.FileReader;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.vimalselvam.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= "src\\test\\java\\com\\framework\\cucumber\\features", 
glue={"com.framework.cucumber.stepdefinitions"},
tags= {"@put"},
plugin = {"com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:src/test/reports/cucumber_Extent_report.html"}
		)
public class TestRunner {
	@AfterClass
	public static void teardown() {
        Reporter.loadXMLConfig(new File("src\\test\\java\\com\\framework\\cucumber\\configuration\\extent-config.xml"));
        Reporter.setSystemInfo("user", System.getProperty("user.name"));
        //Reporter.setSystemInfo("os", "Windows 10");
        Reporter.setTestRunnerOutput("Sample test runner output message");
	 }
	}
