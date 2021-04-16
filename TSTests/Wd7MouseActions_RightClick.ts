import {Actions, Builder, By, until, WebDriver, WebElement} from "selenium-webdriver"
import "chromedriver"
import "geckodriver"

(async function () {

    //open application

    //open browser
    let driver:WebDriver = await new Builder().forBrowser("chrome").build();
    await driver.manage().setTimeouts({pageLoad:20000,implicit:10000});
    await driver.manage().window().maximize();
    
    //navigate to url
    await driver.get("https://swisnl.github.io/jQuery-contextMenu/demo.html")

    await driver.actions()
    .contextClick(await driver.findElement(By.xpath("//span[text()='right click me']")))
    .click(await driver.findElement(By.xpath("//span[text()='Quit']")))
    .perform();

})();