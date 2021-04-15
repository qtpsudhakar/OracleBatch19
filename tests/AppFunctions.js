async function login(driver) {
    await driver.findElement(By.id('txtUsername')).sendKeys("admin");
    await driver.findElement(By.id('txtPassword')).sendKeys("admin123");
    await driver.findElement(By.id("btnLogin")).click();
}