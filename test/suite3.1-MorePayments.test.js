


const {Builder, By, Key, until} = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();
var assert = require('chai').assert;
var webdriver = require('selenium-webdriver');
var TEST_DATA =require ("./TestData.json"); 






describe("testing payments in bank transfer & different payments", function(){

    before( () => {
        driver.get(TEST_DATA.url);
        driver.manage().window().maximize();

    });

    after( () => {
        driver.quit();

    });

    beforeEach( () => {

        // do something before test case execution
        // no matter if there are failed cases

    });

    afterEach( () => {

        // do something after test case execution is finished
        // no matter if there are failed cases

    });

    it("Test-1", () => {

        // test Code
        // assertions

    });

    it("Test-2", () => {

        // test Code
        // assertions

    });

    it("Test-3", () => {

        // test Code
        // assertions

    });

});