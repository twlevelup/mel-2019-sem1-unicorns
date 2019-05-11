const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
const activities = require('./../data');

class ContactsPage extends BasePage {
  template = require('./contactsPage.hbs');

  pageWillLoad() {
    this.activity = activities[ContactsPage.staticProperty]
    this.dueTime = this.createTime()
    this.index = ContactsPage.staticProperty + 1;
    this.numberOfActivities = activities.length;
  }

  createTime() {
    var minutes = Math.floor((this.activity.time.getTime() - (new Date().getTime()))/60000)
    if(minutes < 0) {
      var string = 'Overdue in '
      minutes *= -1
    }
      else {
      var string = 'Due in '
      }
    if(minutes >= 60)
      var hours = Math.floor(minutes/60)
    else
      return string +  minutes + ' minutes'

    if(hours >= 24)
     return string + Math.floor(hours/24) + (Math.floor(hours/24)==1? ' day ' :  ' days ')
    minutes = minutes - hours*60
    return string + hours + (hours==1? ' hour ' :  ' hours and ') + minutes + (minutes==1? ' minute ' :  ' minutes ')
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
      this.navigate('/');
      this.navigate('contacts');
    }
  }
}

ContactsPage.staticProperty = 0;

module.exports = ContactsPage;
