Ext.define("TaskManager.view.settings.changepassword.ChangePasswordForm", {
  extend: "Ext.form.Panel",
  xtype: "changepasswordform",
  reference: "changepasswordform",
  layout: "form",
  defaultButton: "changepassword",
  defaultFocus: "currentpassword",
  items: [
    {
      xtype: "textfield",
      name: "currentpassword",
      fieldLabel: "Current Password",
      inputType: "password",
      allowBlank: false,
      label: "Current Password",
    },
    {
      xtype: "textfield",
      name: "newpassword",
      fieldLabel: "New Password",
      inputType: "password",
      allowBlank: false,
      label: "New Password",
    },
    {
      xtype: "textfield",
      name: "confirmpassword",
      fieldLabel: "Confirm Password",
      inputType: "password",
      allowBlank: false,
      label: "Confirm Password",
    },
  ],
  buttons: [
    {
      text: "Cancel",
      handler: "onCancelChangePassword",
    },
    {
      text: "Submit",
      formBind: true,
      reference: "changepassword",
      listeners: {
        click: "onChangePasswordClick",
      },
    },
  ],
});
