


const {Builder, By, Key, until} = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();
var assert = require('chai').assert;
var webdriver = require('selenium-webdriver');
var TEST_DATA =require ("./TestData.json"); 






describe("", function(){

    beforeEach( (done) => {
        driver.get(TEST_DATA.url);
        driver.manage().window().maximize();

        

        done();
    });

    afterEach( (done) => {
        driver.quit();

        done();
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