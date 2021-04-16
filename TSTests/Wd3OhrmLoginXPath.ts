import {Actions, Builder, By, WebDriver} from "selenium-webdriver"
import "chromedriver"
import "geckodriver"

(async function () {

    //open browser
    let driver:WebDriver = await new Builder().forBrowser("chrome").build();
    await driver.manage().setTimeouts({pageLoad:20000});
    
    //navigate to url
    await driver.get("https://opensource-demo.orangehrmlive.com/")

    // get title of opened page
    let title:string = await driver.getTitle();
    await console.log(title);

    //enter user name
    await driver.findElement(By.xpath("//input[@id='txtUsername']")).sendKeys("admin");

    //enter password
    await driver.findElement(By.xpath("//input[@id='txtPassword']")).sendKeys("admin123");

    //click on login
    await driver.findElement(By.xpath("//input[@value='LOGIN']")).click();

    await driver.sleep(1000);
    
    //click on PIM link
    await driver.findElement(By.xpath("//a[normalize-space()='PIM']")).click();

    //click on add employee link
    await driver.findElement(By.xpath("//a[text()='Add Employee']")).click();

    //enter first name
    await driver.findElement(By.xpath("//*[@id='firstName']")).sendKeys("selenium");

    //enter last name
    await driver.findElement(By.xpath("//*[@id='lastName']")).sendKeys("dev");
    
    //click on save
    await driver.findElement(By.xpath("//*[@id='btnSave']")).click();

    //close browser
    await driver.quit()

})();