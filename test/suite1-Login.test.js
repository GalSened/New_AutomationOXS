
const {Builder, By, Key, until} = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();
var assert = require('chai').assert;
var webdriver = require('selenium-webdriver');
var TEST_DATA =require ("./TestData.json"); 




describe("login to main page", () => {
    

    before( function(done){

        driver.get(TEST_DATA.url);
        driver.manage().window().maximize();
    done();
    });

    after(() => {

        driver.quit();

        
    });

    beforeEach(() => {


    });

    afterEach(() => {

        // do something after test case execution is finished
        // no matter if there are failed cases

    });

    it("Test-1 Logging in",async () => {

        await driver.findElement(By.css('#view > div > header > div.loginButton > p')).click();
        await driver.findElement(By.xpath('//*[@id="login-form"]/form/input[1]')).sendKeys(TEST_DATA.username);
        await driver.findElement(By.xpath('//*[@id="login-form"]/form/input[2]')).sendKeys(TEST_DATA.password);
        await driver.findElement(By.xpath('//*[@id="login-submit"]/input')).click();
    
    }).timeout(10000);

    it("Test-2", () => {

        // test Code
        // assertions

    });

    it("Test-3", ()=> {

        // test Code
        // assertions

    });

});
