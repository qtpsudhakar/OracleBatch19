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
    await driver.get("https://jqueryui.com/droppable/")

    await driver.actions().move({origin:await driver.findElement(By.linkText("API documentation"))}).perform();
    
    // switch to frame
    let frm:WebElement = await driver.findElement(By.css("iframe.demo-frame"));
    await driver.switchTo().frame(frm);

    let src:WebElement = await driver.findElement(By.id("draggable"));
    let dst:WebElement = await driver.findElement(By.id("droppable"));

    await driver.actions().dragAndDrop(src,dst).perform();


})();