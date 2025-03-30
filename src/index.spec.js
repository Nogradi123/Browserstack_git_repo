const {By, Builder, until, Key} = require('selenium-webdriver');
const assert = require('assert');
require('dotenv').config();


console.log("Username:", process.env.BROWSERSTACK_USERNAME);
console.log("Access Key:", process.env.BROWSERSTACK_ACCESS_KEY);

describe("Log user in and favorite item", function() {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Log in, filter product, favorite, verify favorites', async function() {
        await driver.get('https://www.bstackdemo.com/');

        await driver.manage().setTimeouts({implicit: 500});

        let signInButton = await driver.findElement(By.xpath('//*[@id="signin"]'));
        await signInButton.click();

        await driver.manage().setTimeouts({implicit: 5000});

        // // Set username
        let userName = await driver.findElement(By.xpath('/html/body/div[1]/div[2]/div/form/div[2]/div[1]/div'));
        await userName.click();

        let usernameInput = await driver.findElement(By.xpath('/html/body/div[1]/div[2]/div/form/div[2]/div[1]/div/div[1]/div[2]/div/input'));
        await usernameInput.sendKeys('demouser', Key.ENTER);
                
        
        // // Set password
        let password = await driver.findElement(By.xpath('//*[@id="password"]/div/div[1]'));
        await password.click();

        let passwordInput = await driver.findElement(By.xpath('/html/body/div[1]/div[2]/div/form/div[2]/div[2]/div/div[1]/div[2]/div/input'));
        await passwordInput.sendKeys('testingisfun99', Key.ENTER);

        

        // // Login
        let loginButton =  await driver.findElement(By.xpath('/html/body/div[1]/div[2]/div/form/div[2]/button'));
        await loginButton.click();
        
      
        // Verify page load after login
        let title = await driver.getTitle();
        assert.equal("StackDemo", title);

        // Filter product
        let filterSelection = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div[1]/div[2]/label/span'));
        await filterSelection.click();
        
        // Favor product
        let favoriteButton = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div[2]/div[3]/div[1]/button'));
        await favoriteButton.click();

        // Navigate to favorites tab
        let selectFavorites = await driver.findElement(By.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[1]/div/a[1]'));
        await selectFavorites.click();

        // Find favorited item and validate 
        let item = await driver.findElement(By.xpath('/html/body/div[1]/div/div/main/div[1]/div[2]/p'));
        let text = await item.getText();

        assert.equal(text, 'Galaxy S20+', 'Text verification failed: Text does not match');
        console.log('Text verification passed!')
    });

    after(async() => await driver.quit());
})
