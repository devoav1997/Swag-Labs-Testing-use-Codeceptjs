const { I } = inject();

Given('User already in Login Swag Labs', () => {
    I.amOnPage('https://www.saucedemo.com/');
});

When('User Input username and passsword', () => {
  I.waitForElement('//input[@data-test="login-button"]', 10);
  I.fillField('//input[@data-test="username"]', 'standard_user');
  I.fillField('//input[@data-test="password"]', 'secret_sauce');
});

Then('click Login Button', () => {
  I.click('//input[@data-test="login-button"]');
});

Then('I should see name Products on Product swag labs page', () => {
  I.wait(2); 
  I.see('Products');
});

Given('I should see name Products on Product swag labs page', () => {
  I.see('Products');
});

When('I Click Products Sauce Labs Backpack',() => {
  I.click('//*[@id="item_4_title_link"]/div');
});


Then('I should see details Sauce Labs Backpack', () => {
  I.see('Sauce Labs Backpack');
  I.see('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
  I.see('$29.99');
  I.click('//button[@data-test="add-to-cart-sauce-labs-backpack"]');
});