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
        },
        {
          xtype: "usertasksgrid",
        },
      ],
    },
    {
      xtype: "button",
      text: "Update Profile",
      margin: "10 0",
      handler: function () {
        this.up("usersettings").down("#profileForm").setVisible(true);
      },
    },
    {
      xtype: "button",
      text: "Change Password",
      margin: "10 0",
      handler: function () {
        this.up("usersettings").down("#passwordForm").setVisible(true);
      },
    },
    {
      xtype: "button",
      text: "Logout",
      margin: "10 0",
      handler: "handleLogout",
    },

    // Update Profile Form
    {
      xtype: "formpanel",
      itemId: "profileForm",
      title: "Update Profile",
      hidden: true,
      margin: "10 0",
      width: 300,
      defaultType: "textfield",
      items: [
        {
          fieldLabel: "Name",
          name: "name",
          bind: "{currentUserData.name}",
        },
        {
          fieldLabel: "Email",
          name: "email",
          bind: "{currentUserData.email}",
        },
        {
          fieldLabel: "Phone",
          name: "phone",
          bind: "{currentUserData.phone}",
        },
      ],
      buttons: [
        {
          text: "Submit",
          handler: function () {
            // Submit form logic to backend
          },
        },
        {
          text: "Cancel",
          handler: function () {
            this.up("form").reset(); // reset the form values
            this.up("form").setVisible(false); // hide the form
          },
        },
      ],
    },

    // Change Password Form
    {
      xtype: "formpanel",
      itemId: "passwordForm",
      title: "Change Password",
      hidden: true,
      margin: "10 0",
      width: 300,
      defaultType: "textfield",
      items: [
        {
          fieldLabel: "Current Password",
          name: "currentPassword",
          inputType: "password",
        },
        {
          fieldLabel: "New Password",
          name: "newPassword",
          inputType: "password",
        },
        {
          fieldLabel: "Confirm Password",
          name: "confirmPassword",
          inputType: "password",
        },
      ],
      buttons: [
        {
          text: "Submit",
          handler: function () {
            // Submit form logic to backend
          },
        },
        {
          text: "Cancel",
          handler: function () {
            this.up("form").reset(); // reset the form values
            this.up("form").setVisible(false); // hide the form
          },
        },
      ],
    },
  ],
});
