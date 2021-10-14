const xlsxFile = require('read-excel-file/node');
const {Builder, By, Key, until} = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();
var assert = require('chai').assert;
var webdriver = require('selenium-webdriver');


// xlsxFile('./Data.xlsx').then((MyData) => {
//    console.table(MyData);
//});


describe("Inner Suite 1", function(){
    

    before( function(done){

        driver.get("https://stg.oxs.co.il");
        driver.manage().window().maximize();
    done();
    });

    after(function(){

        //driver.quit();

        
    });

    beforeEach(function(){


    });

    afterEach(function(){

        // do something after test case execution is finished
        // no matter if there are failed cases

    });

    it("Test-1 Logging in",async function(){

        await driver.findElement(By.css('#view > div > header > div.loginButton > p')).click();
        await driver.findElement(By.xpath('//*[@id="login-form"]/form/input[1]')).sendKeys('user@test.com');
        await driver.findElement(By.xpath('//*[@id="login-form"]/form/input[2]')).sendKeys('123123');
        await driver.findElement(By.xpath('//*[@id="login-submit"]/input')).click();
    
    }).timeout(10000);

    it("Test-2", function(){

        // test Code
        // assertions

    });

    it("Test-3", function(){

        // test Code
        // assertions

    });

});
