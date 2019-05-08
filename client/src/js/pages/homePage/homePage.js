const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;
const logo = require('../../../images/logo.png');
const plop = './sounds/plop.mp3';

//test for raspberrypi
class HomePage extends BasePage {
  template = require('./homePage.hbs');

  pageWillLoad() {
    StorageHub.setData('contacts', [
      { name: 'Ray', phoneNumber: '0431 111 111' },
      { name: 'Sinan', phoneNumber: '0431 222 222' },
      { name: 'Jafari', phoneNumber: '0431 333 333' },
    ])

    this.updateTimeEveryMinute();
    const dateTime = this.getDateTime();
    this.date = dateTime.date;
    this.time = dateTime.time;
    this.logo = logo;
  }

  getDateTime() {
    const dateTime = new Date(Date.now()).toLocaleString('en-AU').split(",");
    const timeArray = dateTime[1].split(":");
    const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var getMonth = MONTHS[parseInt(dateTime[0].split("/")[1])-1];
    const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var getDay = DAYS[new Date().getDay()].slice(0,3);

    return {
      date: getDay + ", " + dateTime[0].split("/")[0] + " " + getMonth,
      time: timeArray[0]+":"+timeArray[1] + " " + timeArray[2].split(" ")[1]
    };
  }

  updateTimeEveryMinute() {
    setInterval(() => this.updateTimeDisplay(this.getDateTime), 60000);
  }

  updateTimeDisplay(getTime) {
    const clockTime = document.getElementById("clock-time");
    if (clockTime) {
      clockTime.textContent = getTime().time;
    }
  }

  rightButtonEvent() {
    this.navigate('contacts');
  }

  leftButtonEvent() {
    AudioHub.playSound(plop);
  }

  topButtonEvent() {
    this.watchFace.scrollTop -= 40;
  }

  bottomButtonEvent() {
    this.watchFace.scrollTop += 40;
  }

  faceButtonEvent() {
    this.navigate('activity');
  }
}

module.exports = HomePage;
