const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
class TeamPage extends BasePage {
  template = require('./teamPage.hbs');
}

module.exports = TeamPage;

console.log(StorageHub.getData('contacts'));
