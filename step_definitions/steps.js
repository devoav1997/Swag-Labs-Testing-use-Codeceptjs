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

Given('I am on the Swag Labs product page', () => {
  I.amOnPage('/inventory.html');
});


When('I Click Products Sauce Labs Backpack',() => {
  I.click('//*[@id="item_4_title_link"]/div');
});


Then('I should see details Sauce Labs Backpack', () => {
  I.see('Sauce Labs Backpack');
  I.see('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
  I.see('$29.99');
});

Then('I add a Sauce Labs Backpack to my cart', () => {
  I.click('//button[@data-test="add-to-cart-sauce-labs-backpack"]');
});

Then('the cart should contain a Sauce Labs Backpack', () => {
  I.click('//*[@id="shopping_cart_container"]/a');
  I.see('Sauce Labs Backpack');
  I.wait(2);
});

Given('I am on the Swag Labs Cart Page', () => {
  I.amOnPage('/cart.html');
});

When('I Click Continue Shooping Button', () => {
  I.wait(2);
  I.click('//button[@data-test="continue-shopping"]');
  I.wait(1);
});

When('I click Sauce Labs Bike Light', () => {
  I.click('//*[@id="item_0_title_link"]/div')
  I.wait(1);
});

Then('I should see details Sauce Labs Bike Light', () => {
  I.see('Sauce Labs Bike Light');
  I.see("A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.");
  I.see('$9.99');
});

Then('I add a Sauce Labs Bike Light to my cart', () => {
  I.click('//button[@data-test="add-to-cart-sauce-labs-bike-light"]');
});

Then('the cart should contain a Sauce Labs Backpack and Sauce Labs Bike Light to my cart', () => {
  I.click('//*[@id="shopping_cart_container"]/a');
  I.see('Sauce Labs Backpack');
  I.see('Sauce Labs Bike Light')
  I.wait(2);
});


