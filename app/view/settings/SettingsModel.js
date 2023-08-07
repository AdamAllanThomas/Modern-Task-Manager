Ext.define("TaskManager.view.settings.SettingsModel", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.settings",

  data: {
    titleText: "My Profile",
    currentUserData: null,
  },

  stores: {
    CurrentUser: {
      type: "currentuser",
    },
    CurrentUserTasks: {
      type: "currentusertasks",
    },
  },

  formulas: {
    currentUserData: function () {
      return Ext.getStore("CurrentUser").getData();
    },
  },
});
