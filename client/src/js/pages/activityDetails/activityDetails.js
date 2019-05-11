const BasePage = require('watch-framework').BasePage;
const activities = require('./../data');


class ActivityDetails extends BasePage {
  template = require('./activityDetails.hbs');

  pageWillLoad() {
    this.activity = activities[0]
    this.time = this.createTime()
  }

  createTime() {
    var minutes = (this.activity.time.getTime() - (new Date().getTime())) / 60000
    if (minutes < 0) {
      var string = 'Overdue '
      minutes *= -1
      var endString = " ago"
    }
    else {
      var string = 'Due in '
      var endString = ""
    }

    if (minutes < 1)
      return string + Math.floor(minutes * 60) + (Math.floor(minutes * 60) == 1 ? ' second' : ' seconds') + endString

    minutes = Math.floor(minutes)

    if (minutes >= 60)
      var hours = Math.floor(minutes / 60)
    else
      return string + minutes + ' minutes' + endString

    if (hours >= 24)
      return string + Math.floor(hours / 24) + (Math.floor(hours / 24) == 1 ? ' day ' : ' days ') + endString
    minutes = minutes - hours * 60
    return string + hours + (hours == 1 ? ' hour ' : ' hours and ') + minutes + (minutes == 1 ? ' minute ' : ' minutes ') + endString
  }

  topButtonEvent() {
    this.navigate('/');
  }

  bottomButtonEvent() {
    this.navigate('/');
  }

}

module.exports = ActivityDetails;
