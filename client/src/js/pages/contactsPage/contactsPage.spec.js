const ContactsPage = require('./contactsPage');
const StorageHub = require('watch-framework').StorageHub;
const activities = require('./../data');

describe('ContactsPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should render my specific contacts', () => {
      const contacts = [
        {
          activity: "walk dog",
          time: new Date('2019-05-09T15:00:00')
        },
      ];
      StorageHub.setData('contacts', contacts)
      const page = new ContactsPage();
      page.pageWillLoad();
      expect(page.render()).toContain("<span>{{contacts[0].activity}}</span>");
      expect(page.render()).toContain("<span>{{contacts[0].time.toDateString()}}</span>");
    });
  });

  describe('#leftButtonEvent', () => {
    it('goes to root page', () => {
      const page = new ContactsPage();
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });
});
