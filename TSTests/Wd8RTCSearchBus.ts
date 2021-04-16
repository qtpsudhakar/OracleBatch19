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
    await driver.get("https://www.tsrtconline.in/oprs-web/")

    let fromPlace = "HYDERABAD";
    let toPlace = "BANGALORE";
    await driver.findElement(By.id("fromPlaceName")).sendKeys(fromPlace);
    await (await driver.findElement(By.linkText(fromPlace))).click();

    await driver.findElement(By.id("toPlaceName")).sendKeys(toPlace);
    await (await driver.findElement(By.linkText(toPlace))).click();

    await (await driver.findElement(By.id("txtJourneyDate"))).click();
    await (await driver.findElement(By.linkText("23"))).click();

    await (await driver.findElement(By.id("searchBtn"))).click();

    let allServs:WebElement[] = await driver.findElements(By.css("div.srvceNO"));

    allServs.forEach(async elm=>console.log(await elm.getText()));
})();