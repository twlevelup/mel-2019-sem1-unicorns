const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
const activities = require('./../data');

class ContactsPage extends BasePage {
  template = require('./contactsPage.hbs');

  pageWillLoad() {
    this.activity = activities[ContactsPage.staticProperty]
  }

  leftButtonEvent() {
    if (ContactsPage.staticProperty != 0) {
      ContactsPage.staticProperty--;
      this.navigate('/');
      this.navigate('contacts');
    } else {
      this.navigate('/');
    }
  }

  rightButtonEvent() {
    if (ContactsPage.staticProperty == activities.length - 1) {
      ContactsPage.staticProperty = 0
      this.navigate('/');
    } else {
      ContactsPage.staticProperty++;
      console.log(ContactsPage.staticProperty)
      this.navigate('/');
      this.navigate('contacts');
    }
  }
}

ContactsPage.staticProperty = 0;

module.exports = ContactsPage;
