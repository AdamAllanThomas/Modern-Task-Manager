Ext.define("TaskManager.view.settings.changepassword.ChangePassword", {
  extend: "Ext.window.Window",
  xtype: "changepassword",
  reference: "changepassword",

  requires: ["TaskManager.view.settings.SettingsController", "Ext.form.Panel"],
  controller: "settings",
  bodyPadding: 10,
  title: "Change Password",
  closable: true,
  autoShow: true,

  items: {
    xtype: "changepasswordform",
    buttons: [
      {
        text: "Cancel",
        handler: "onCancelChangePassword",
      },
      {
        text: "Submit",
        formBind: true,
        handler: "onChangePasswordSubmit",
        defaultButton: true,
      },
    ],
  },
});
