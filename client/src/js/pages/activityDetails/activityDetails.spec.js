const ActivityDetails = require('./activityDetails');

describe('DemoPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should contain the correct text', () => {
      const page = new ActivityDetails();
      expect(page.render()).toContain('<h2 style="text-align:center; padding-bottom:30px; padding-right:25px;">Snooze</h2>');
      expect(page.render()).toContain('<h1 style="text-align:center; padding-right:25px;">Take dog for a walk</h1>');
      expect(page.render()).toContain('<h2 style="text-align:center; padding-top:30px; padding-right:25px;">Done</h2>');
    });
  });

  describe('#topButtonEvent', () => {
    it('goes to root page', () => {
      const page = new ActivityDetails();
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

   describe('#bottomButtonEvent', () => {
    it('goes to root page', () => {
      const page = new ActivityDetails();
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

});



