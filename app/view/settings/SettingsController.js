Ext.define("TaskManager.view.settings.SettingsController", {
  extend: "Ext.app.ViewController",
  alias: "controller.settings",

  handleLogout: function () {
    // remove the tokens and refresh the page
    localStorage.removeItem("JWTToken");
    localStorage.removeItem("RefreshToken");
    window.location.reload();
  },
});
