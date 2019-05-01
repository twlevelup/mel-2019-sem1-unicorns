const remainderPage = require("./remainderPage");
const NotificationHub = require("watch-framework").NotificationHub;
const hideSpy = jest.spyOn(NotificationHub, 'hide');

describe("remainderPage", () => {
  describe("#render", () => {
    it("should render my page correctly", () => {
      const notification = new remainderPage();
      expect(notification.render()).toContain("Remainder");
    });
  });

  describe("#leftButtonEvent", () => {
    it("should call NotificationHub.hide", () => {
      console.log = jest.fn();
      const notification = new remainderPage();
      notification.leftButtonEvent();
      expect(hideSpy).toHaveBeenCalled();
      expect(console.log).toHaveBeenCalledWith("LEFT");
    });
  });

});
