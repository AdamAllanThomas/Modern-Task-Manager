Ext.define("TaskManager.view.settings.SettingsModel", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.settings",

  data: {
    titleText: "Settings",
    currentUserData: null,
  },

  stores: {
    CurrentUser: {
      type: "currentuser",
    },
  },

  formulas: {
    currentUserData: function () {
      return Ext.getStore("CurrentUser").getData();
    },
  },
});
