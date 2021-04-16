import {Actions, Builder, By, until, WebDriver, WebElement} from "selenium-webdriver"
import "chromedriver"
import "geckodriver"

(async function () {

    //open application

    //open browser
    let driver:WebDriver = await new Builder().forBrowser("chrome").build();
    await driver.manage().setTimeouts({pageLoad:20000});
    
    //navigate to url
    await driver.get("https://opensource-demo.orangehrmlive.com/")

    // get title of opened page
    let title:string = await driver.getTitle();
    await console.log(title);

    //Login

    //enter user name
    await driver.findElement(By.xpath("//input[@id='txtUsername']")).sendKeys("admin");

    //enter password
    await driver.findElement(By.xpath("//input[@id='txtPassword']")).sendKeys("admin123");

    //click on login
    await driver.findElement(By.xpath("//input[@value='LOGIN']")).click();

    await driver.sleep(1000);
    
    //Add Employee

    //click on PIM link
    await driver.findElement(By.xpath("//a[normalize-space()='PIM']")).click();

    await driver.sleep(1000);

    //click on add employee link
    await driver.findElement(By.xpath("//a[text()='Add Employee']")).click();

    //enter first name
    await driver.findElement(By.xpath("//*[@id='firstName']")).sendKeys("selenium");

    //enter last name
    await driver.findElement(By.xpath("//*[@id='lastName']")).sendKeys("dev");
    
    //click on save
    await driver.findElement(By.xpath("//*[@id='btnSave']")).click();


    //Edit Employee
    await (await driver.findElement(By.xpath("//input[@value='Edit']"))).click();

    await (await driver.findElement(By.id("personal_optGender_1"))).click();

    await (await driver.findElement(By.xpath("//select[@id='personal_cmbNation']/option[text()='Indian']"))).click();
    
    //selecting checkbox
    let chkSmoker:WebElement =await driver.findElement(By.id("personal_chkSmokeFlag"));
    if (!await chkSmoker.isSelected()) {
        await chkSmoker.click();
    }

    //click on save
    (await driver.findElement(By.id("btnSave"))).click();

    //wait for element to present
    await driver.wait(until.elementLocated(By.xpath("//input[@id='btnSave' and @value='Edit']")),10000);
    
    // await driver.sleep(3000);

    let empId =await (await driver.findElement(By.id("personal_txtEmployeeId"))).getAttribute("value");
    //click on employee list
    await (await driver.findElement(By.linkText("Employee List"))).click();

    await driver.sleep(2000);

    let isElmFound=false;
    while (!isElmFound) {
        let elmLst = await driver.findElements(By.xpath("//a[text()='"+empId+"']/../..//input"));
        if (elmLst.length!=0) {
            isElmFound=true;
        }else{
            await (await driver.findElement(By.xpath("//a[text()='Next']"))).click();
        }
    }

    await driver.sleep(2000);
    await (await driver.findElement(By.xpath("//a[text()='"+empId+"']/../..//input"))).click();

    await (await driver.findElement(By.id("btnDelete"))).click();

    //close browser
    // await driver.quit()

    
})();