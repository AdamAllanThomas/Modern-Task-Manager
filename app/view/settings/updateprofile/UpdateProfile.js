Ext.define("TaskManager.view.settings.updateprofile.UpdateProfile", {
  extend: "Ext.window.Window",
  xtype: "updateprofile",
  reference: "updateprofile",

  requires: ["TaskManager.view.settings.SettingsController", "Ext.form.Panel"],
  controller: "settings",
  bodyPadding: 10,
  title: "Update Profile",
  closable: true,
  autoShow: true,
  width: 500,

  items: {
    xtype: "updateprofileform",
    buttons: [
      {
        text: "Cancel",
        handler: "onCancelUpdateProfile",
      },
      {
        text: "Submit",
        formBind: true,
        handler: "handleUpdateProfileSubmit",
        defaultButton: true,
      },
    ],
  },
});
