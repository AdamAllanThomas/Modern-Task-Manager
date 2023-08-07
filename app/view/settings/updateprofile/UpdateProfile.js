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
        handler: "onUpdateProfileSubmit",
        defaultButton: true,
      },
    ],
  },
});
