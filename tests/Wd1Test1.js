let {Builder} = require('selenium-webdriver');
require('chromedriver')

//open browser
let driver = new Builder().forBrowser("chrome").build();

//navigate to url
driver.get("https://opensource-demo.orangehrmlive.com/")

// get title of opened page
let title = driver.getTitle();
console.log(title);

//close browser
driver.quit()
