


const {Builder, By, Key, until} = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();
var assert = require('chai').assert;
var webdriver = require('selenium-webdriver');
var TEST_DATA =require ("./TestData.json"); 






describe("Inner Suite 1", function(){

    before( () => {
        // do something before test suite execution
        // no matter if there are failed cases

    });

    after( () => {
        // do something after test suite execution is finished
        // no matter if there are failed cases

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