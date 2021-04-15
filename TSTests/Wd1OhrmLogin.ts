import {Builder, WebDriver} from "selenium-webdriver"
import "chromedriver"

(async function () {

    //open browser
    let driver:WebDriver = await new Builder().forBrowser("chrome").build();
    await driver.manage().setTimeouts({pageLoad:20000});
    
    //navigate to url
    await driver.get("https://opensource-demo.orangehrmlive.com/")

    // get title of opened page
    let title:string = await driver.getTitle();
    await console.log(title);

    //close browser
    await driver.quit()

})();