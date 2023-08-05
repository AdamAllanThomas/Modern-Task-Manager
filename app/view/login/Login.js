Ext.define("TaskManager.view.login.Login", {
  extend: "Ext.window.Window",
  xtype: "login",

  requires: ["TaskManager.view.login.LoginController", "Ext.form.Panel"],

  controller: "login",
  bodyPadding: 10,
  title: "Login Window",
  closable: false,
  autoShow: true,

  items: {
    xtype: "formpanel",
    reference: "loginform",
    items: [
      {
        xtype: "textfield",
        name: "username",
        fieldLabel: "Username",
        allowBlank: false,
      },
      {
        xtype: "textfield",
        name: "password",
        inputType: "password",
        fieldLabel: "Password",
        allowBlank: false,
      },
    ],
    buttons: [
      {
        text: "Login",
        formBind: true,
        handler: "onLoginClick",
      },
    ],
  },
});
