Ext.define("TaskManager.view.settings.Settings", {
  extend: "Ext.panel.Panel",
  alias: "widget.usersettings",
  title: "User Settings",
  layout: "vbox",
  padding: 10,
  controller: "usersettings",
  viewModel: "usersettings",

  items: [
    // Display current settings
    {
      xtype: "displayfield",
      fieldLabel: "Username",
      bind: "{currentUsername}", // Assuming you're using ViewModel to bind data.
    },
    {
      xtype: "displayfield",
      fieldLabel: "Email",
      bind: "{currentUserEmail}",
    },

    // Buttons
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

    // Update Profile Form
    {
      xtype: "form",
      itemId: "profileForm",
      title: "Update Profile",
      hidden: true,
      margin: "10 0",
      width: 300,
      defaultType: "textfield",
      items: [
        {
          fieldLabel: "Username",
          name: "username",
          bind: "{currentUsername}",
        },
        {
          fieldLabel: "Email",
          name: "email",
          bind: "{currentUserEmail}",
        },
        {
          fieldLabel: "Phone",
          name: "phone",
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
      xtype: "form",
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
            this.up("form").reset();
            this.up("form").setVisible(false);
          },
        },
      ],
    },
  ],
});
