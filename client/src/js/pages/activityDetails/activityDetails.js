const BasePage = require('watch-framework').BasePage;

class ActivityDetails extends BasePage {
  template = require('./activityDetails.hbs');

  topButtonEvent() {
     this.navigate('/');
  }

  bottomButtonEvent() {
     this.navigate('/');
  }

}

module.exports = ActivityDetails;
