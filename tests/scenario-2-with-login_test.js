
Feature('Homepage login page');

Scenario('login to micro from homepage', (I) => {
  I.amOnPage('/');
  I.seeInCurrentUrl('/login');
  I.see('S\'identifier');
  I.fillField('.login-form__username', 'piou-piou');
  I.click('.login-form__identificate');
  I.wait(1);
  I.fillField('.message-input__content', 'We are the best team ever!');
  I.pressKey('Enter');
  I.wait(1);
  I.see('We are the best team ever!');
});
