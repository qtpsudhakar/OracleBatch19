let { Builder, By } = require('selenium-webdriver');
require('chromedriver');

(async function () {

    //open browser
    let driver = await new Builder().forBrowser("chrome").build();    
    await driver.manage().setTimeouts({pageLoad:20000});
    
    //navigate to url
    await driver.get("https://opensource-demo.orangehrmlive.com/")

    // await driver.findElement(By.id('txtUsername')).sendKeys("admin");
    // await driver.findElement(By.id('txtPassword')).sendKeys("admin123");
    await Promise.all([
        driver.findElement(By.id('txtUsername')).sendKeys("admin"),
        driver.findElement(By.id('txtPassword')).sendKeys("admin123")
    ]);
    await driver.findElement(By.id("btnLogin")).click();

    //close browser
    await driver.quit()
    
})();

