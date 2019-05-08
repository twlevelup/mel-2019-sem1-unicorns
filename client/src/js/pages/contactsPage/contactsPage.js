const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class ContactsPage extends BasePage {
  template = require('./contactsPage.hbs');

  pageWillLoad() {
    this.contacts = StorageHub.getData('reminders')
    this.reminders =StorageHub.getData('reminders');

    console.log(StorageHub.getData('reminders'))
  }

  leftButtonEvent() {
    this.navigate('/');
  }
}

module.exports = ContactsPage;

