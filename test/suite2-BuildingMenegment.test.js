

const {Builder, By, Key, until} = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();
var assert = require('chai').assert;
var webdriver = require('selenium-webdriver');
var TEST_DATA =require ("./TestData.json"); 





describe("Creating and editing a building",  () => {

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

    it("creating a building in company with 5 apartments",async () => {

        driver.sleep(5000);
        let CompanyName = await driver.findElement(By.xpath('//*[@id="view"]/div/div[1]/div/div[2]/h2')).getText().then((value) => { return value });
        console.log(CompanyName);
        assert.strictEqual(CompanyName, 'בניינים ונהנים בע"מ');
        await driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[1]/div/p')).click();
        await driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[1]/ul/li[3]/p')).click();
        //await driver.sleep(5000);
        await driver.wait(until.elementLocated(By.id('city')).sendKeys(MyData[1][1]));
        await driver.findElement(By.id('street')).sendKeys(MyData[2][1]);
        await driver.findElement(By.xpath('//*[@id="number"]')).sendKeys(MyData[3][1]);
        await driver.findElement(By.xpath('//*[@id="numberAppartments"]')).sendKeys(MyData[4][1]);
        await driver.findElement(By.xpath('//*[@id="numberAppartmentsConfirm"]')).sendKeys(MyData[4][1]);
        await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div[4]/span/div/form/div[8]/div/button')).click();
        //await driver.sleep(2000);
        await driver.wait(until.elementLocated(By.xpath('//*[@id="view"]/div/div[3]/div/div[5]/span/div[2]/div/form/div/div[2]/center/button'))).click();
        //await driver.sleep(2000);
        await driver.wait(until.elementLocated(By.xpath('//*[@id="amount"]'))).sendKeys(MyData[5][1]);
        await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div[6]/span/ul/ul/form/div[3]/div/div/div[1]/div/input')).click();
        await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div[6]/span/ul/ul/form/div[3]/div/div/div[1]/div/ul/li[1]')).click();
        await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div[6]/span/ul/ul/form/div[3]/div/div/div[2]/div/input')).click();
        await driver.sleep(2000);
        await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div[6]/span/ul/ul/form/div[3]/div/div/div[2]/div/ul/li[3]')).click();
        await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div[6]/span/ul/ul/form/div[4]/div[2]/center/button')).click();
        await driver.sleep(2000);
        await driver.findElement(By.xpath('//*[@id="done"]/center/input')).click();
        console.log('WE HAVE A BUILDING')
    

    });


    it("Test-3", async () => {
            await driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[2]/div/p')).click();
            await driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[2]/ul/li[3]/p')).click();
            await driver.sleep(4000);
            await driver.findElement(By.xpath('//*[@id="612b340e3be86169b2342b70"]/div[3]/div/div[2]/p')).click();
            await driver.sleep(4000);
            let NumOfLevels = await driver.findElement(By.xpath('//*[@id="612b340e3be86169b2342b70"]/div[4]/div[1]/div[3]/div[2]/input'))
            await NumOfLevels.click();
            await NumOfLevels.clear();
            await NumOfLevels.sendKeys('3');
            await driver.sleep(4000);
            await driver.findElement(By.xpath('//*[@id="612b340e3be86169b2342b70"]/div[4]/div[3]/div/div/section/div[2]/table/tbody/tr[2]/td[3]/p')).click();
            await driver.findElement(By.xpath('//*[@id="612b340e3be86169b2342b70"]/div[4]/div[3]/div/div/section/div[2]/table/tbody/tr[2]/td[3]/span/div[1]/label/div')).click();
            await driver.findElement(By.xpath('//*[@id="612b340e3be86169b2342b70"]/div[4]/div[3]/div/div/section/div[2]/table/tbody/tr[3]/td[3]/p')).click();
            await driver.findElement(By.xpath('//*[@id="612b340e3be86169b2342b70"]/div[4]/div[3]/div/div/section/div[2]/table/tbody/tr[3]/td[3]/span/div[1]/label/div')).click();
            await driver.findElement(By.xpath('//*[@id="612b340e3be86169b2342b70"]/div[4]/div[3]/div/div/section/div[2]/table/tbody/tr[3]/td[3]/p')).click();
            await driver.findElement(By.xpath('//*[@id="612b340e3be86169b2342b70"]/div[4]/div[3]/div/div/section/div[2]/table/tbody/tr[3]/td[3]/span/div[1]/label/div')).click();
            await driver.findElement(By.xpath('//*[@id="612b340e3be86169b2342b70"]/div[4]/div[3]/div/div/section/div[2]/table/tbody/tr[4]/td[3]/p')).click();
            await driver.sleep(1000);
            await driver.findElement(By.xpath('//*[@id="612b340e3be86169b2342b70"]/div[4]/div[3]/div/div/section/div[2]/table/tbody/tr[4]/td[3]/span/div[1]/label/div')).click();
            await driver.findElement(By.xpath('//*[@id="612b340e3be86169b2342b70"]/div[4]/div[3]/div/div/section/div[2]/table/tbody/tr[4]/td[3]/p')).click();
            await driver.findElement(By.xpath('//*[@id="612b340e3be86169b2342b70"]/div[4]/div[3]/div/div/section/div[2]/table/tbody/tr[4]/td[3]/span/div/label/div')).click();
            await driver.findElement(By.xpath('//*[@id="612b340e3be86169b2342b70"]/div[4]/div[3]/div/div/section/div[3]/div/button')).click();
            await driver.takeScreenshot().then(
                function(image, err) {
                    require('fs').writeFile('Screenshot_3Floors.png', image, 'base64', function(err) {
                    console.log(err);
                    });
                });

    });





    it("Edit apartment number from 100 to 200 + assertion + print new number",async () => {

    driver.sleep(10000);
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[2]/img')).click();
    await driver.findElement(By.xpath('//*[@id="610a6d8bf0691d26a2124ad1"]')).click();
    await driver.sleep(4000);
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[2]/div/p')).click();
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[2]/div/div[1]/div[4]/div[2]/ul/li[1]/p')).click();
    await driver.sleep(4000);
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div/div[3]/table/tbody/tr[1]/td[9]/div/div[2]/img')).click();
    await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div/div[3]/table/tbody/tr[1]/td[9]/div/div[1]/span/span[1]/img')).click();
    let EditAp = await driver.findElement(By.xpath('//*[@id="modalTitle"]/h2')).getText().then((value) => { return value });
    console.log(EditAp);
    assert.strictEqual(EditAp, 'עריכת דירה - 100');
    let ApartmentNumber = await driver.findElement(By.xpath('//*[@id="modalDescription"]/div[1]/div[2]/input'));
    ApartmentNumber.clear();
    ApartmentNumber.sendKeys('200');
    await driver.findElement(By.xpath('//*[@id="modalDescription"]/div[5]/input')).click();
    await driver.sleep(4000);
    let ApartmentAlert = await driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div[2]/span/span')).getText();
    console.log(ApartmentAlert);
    await driver.findElement(By.xpath('//*[@id="modalDescription"]/div/div[2]/div/div')).click();
    let NewApNumber = await driver.findElement(By.xpath('//*[@id="view"]/div/div[3]/div/div/div[3]/table/tbody/tr[1]/td[1]/span/p')).getText().then((value) => { return value });
    console.log(NewApNumber);

    });

    

});