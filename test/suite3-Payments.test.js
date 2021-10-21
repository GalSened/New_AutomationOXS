
const {Builder, By, Key, until} = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();
var assert = require('chai').assert;
var webdriver = require('selenium-webdriver');
var TEST_DATA =require ("./TestData.json"); 






describe("Testing payments in cash, CC & checks", function(){

    beforeEach( (done) => {
        driver.get(TEST_DATA.url);
        driver.manage().window().maximize();

        driver.sleep(1000);      
        driver.wait(until.elementLocated(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[2]/img')),10000).click();
        driver.findElement(By.id('612b340e3be86169b2342b70')).click();

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