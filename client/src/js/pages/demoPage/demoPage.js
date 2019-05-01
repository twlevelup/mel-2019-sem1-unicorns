const BasePage = require('watch-framework').BasePage;

class DemoPage extends BasePage {
  template = require('./demoPage.hbs');

  topButtonEvent() {
     this.navigate('/');
  }

  bottomButtonEvent() {
     this.navigate('/');
  }

}

module.exports = DemoPage;
