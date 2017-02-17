
Feature('Messages view');

Scenario('I wrote something in the list and I can view the list', (I) => {
  I.amOnPage('/');
  I.waitForVisible('.message-input__content');
  I.fillField('.message-input__content', 'We are the best team ever!');
  I.pressKey('Enter');
  I.see('We are the best team ever!');
});
