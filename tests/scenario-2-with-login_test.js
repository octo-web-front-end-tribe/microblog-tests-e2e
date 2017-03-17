
Feature('Homepage login page');

Scenario('login to micro from homepage, write a message and logout', (I) => {
  //Login
  I.amOnPage('/');
  I.seeInCurrentUrl('/login');
  I.see('S\'identifier');
  I.fillField('.login-form__username', 'piou-piou');
  I.click('.login-form__identify');
  I.wait(1);

  //Write a message
  I.fillField('.message-input__content', 'We are the best team ever!');
  I.pressKey('Enter');
  I.wait(1);
  I.see('We are the best team ever!');

  //Logout
  I.click('.navigation-bar__link--logout');
  
});
