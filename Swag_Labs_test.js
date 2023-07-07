const { I } = inject();

Given('I input username, password and Click Button Login', () => {
    I.amOnPage('https://www.saucedemo.com/');
    I.waitForElement('//input[@data-test="login-button"]', 10);
    I.fillField('//input[@data-test="username"]', 'standard_user');
    I.fillField('//input[@data-test="password"]', 'secret_sauce');
    I.click('//input[@data-test="login-button"]');
});

Then('I should see Products swag labs page', () => {
    I.see('Products');
});
