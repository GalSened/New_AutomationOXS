
const {Builder, By, Key, until} = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();
var assert = require('chai').assert;
var webdriver = require('selenium-webdriver');
var TEST_DATA =require ("./TestData.json"); 




describe.only("login to main page", () => {
    

    beforeEach( (done) => {
        driver.get(TEST_DATA.url);
        driver.manage().window().maximize();

    

        done();
    });

    afterEach( (done) => {
        driver.quit();

        done();
    });

    it("Test-1 Logging in",async () => {
        driver.sleep(10000)
        await driver.findElement(By.css('#view > div > header > div.loginButton > p')).click();
        await driver.findElement(By.xpath('//*[@id="login-form"]/form/input[1]')).sendKeys(TEST_DATA.username);
        await driver.findElement(By.xpath('//*[@id="login-form"]/form/input[2]')).sendKeys(TEST_DATA.password);
        await driver.findElement(By.xpath('//*[@id="login-submit"]/input')).click();
        NameOfCompany= await driver.findElement(By.xpath('//*[@id="view"]/div/div[1]/div/div[2]/h2')).getText();
        assert.equal(NameOfCompany, 'בניינים ונהנים בע"מ', 'name of company is wrong');
    
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
