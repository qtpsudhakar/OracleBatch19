let { Builder } = require('selenium-webdriver');
require('chromedriver');

(async function () {

    //open browser
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().setTimeouts({pageLoad:2000});
    
    //navigate to url
    await driver.get("https://opensource-demo.orangehrmlive.com/")

    // get title of opened page
    let title = await driver.getTitle();
    await console.log(title);

    //close browser
    await driver.quit()

})();