Ext.define("TaskManager.view.settings.Settings", {
  extend: "Ext.panel.Panel",
  xtype: "usersettings",
  padding: 10,
  controller: "settings",
  viewModel: "settings",

  bind: {
    title: "{titleText}",
  },

  layout: "vbox",

  items: [
    {
      xtype: "panel",
      layout: "hbox",
      items: [
        {
          xtype: "userinfopanel",
          height: 600,
        },
        {
          xtype: "usertasksgrid",
          height: 600,
        },
      ],
    },
    {
      xtype: "panel",
      layout: "hbox",
      centered: true, // add this line
      items: [
        {
          xtype: "button",
          text: "Update Profile",
          margin: "10 0",
          handler: "handleUpdateProfileOpen",
        },
        {
          xtype: "button",
          text: "Change Password",
          margin: "10 0",
          handler: "handleChangePasswordOpen",
        },
        {
          xtype: "button",
          text: "Logout",
          margin: "10 0",
          handler: "handleLogout",
        },
      ],
    },
  ],
});
