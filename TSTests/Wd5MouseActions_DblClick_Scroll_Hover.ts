import {Actions, Builder, By, until, WebDriver, WebElement} from "selenium-webdriver"
import "chromedriver"
import "geckodriver"

(async function () {

    //open application

    //open browser
    let driver:WebDriver = await new Builder().forBrowser("chrome").build();
    await driver.manage().setTimeouts({pageLoad:20000,implicit:10000});
    
    //navigate to url
    await driver.get("https://api.jquery.com/dblclick/")

    // switch to frame
    let frm:WebElement = await driver.findElement(By.xpath("//div[@class='demo code-demo']/iframe"));
    await driver.switchTo().frame(frm);

    let elm:WebElement= await driver.findElement(By.xpath("//span[text()='Double click the block']/../div"));

    //scoll to element
    await driver.actions().move({origin:elm}).perform();

    //double click on element
    await driver.actions().doubleClick(elm).perform();

    //switch to top html 
    await driver.switchTo().defaultContent();

    let support:WebElement = await driver.findElement(By.linkText("Support"));

    //mouse hover on support
    await driver.actions().move({origin:support}).perform();

    await driver.actions().click(await driver.findElement(By.linkText("Forums"))).perform();
    
})();