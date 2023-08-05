Ext.define("TaskManager.view.users.AddUserWindow", {
  extend: "Ext.window.Window",
  xtype: "adduserwindow",
  requires: ["Ext.form.Panel"],
  modal: true,
  width: 400,
  layout: "fit",
  title: "Add New User",
  controller: "users",
  items: [
    {
      xtype: "formpanel",
      reference: "addUserForm",
      bodyPadding: 10,
      items: [
        {
          xtype: "textfield",
          name: "name",
          fieldLabel: "Name",
          allowBlank: false,
          placeholder: "Full Name",
        },
        {
          xtype: "emailfield",
          name: "email",
          fieldLabel: "Email",
          allowBlank: false,
          placeholder: "Email Address",
        },
        {
          xtype: "textfield",
          name: "phone",
          fieldLabel: "Phone",
          allowBlank: false,
          placeholder: "Phone Number",
        },
        {
          xtype: "passwordfield",
          name: "password",
          fieldLabel: "Password",
          allowBlank: false,
          placeholder: "Password",
        },
      ],
    },
  ],
  buttons: [
    {
      text: "Save",
      handler: "onSaveUser",
    },
    {
      text: "Cancel",
      handler: "onCancelSaveUser",
    },
  ],
});
