Ext.define("TaskManager.view.auth.Login", {
  extend: "Ext.window.Window",
  xtype: "login",
  reference: "login",

  requires: ["TaskManager.view.auth.AuthController", "Ext.form.Panel"],

  controller: "auth",
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
        placeholder: "Enter username",
      },
      {
        xtype: "textfield",
        name: "password",
        inputType: "password",
        fieldLabel: "Password",
        allowBlank: false,
        placeholder: "Enter password",
      },
    ],
    buttons: [
      {
        text: "Login",
        formBind: true,
        handler: "onLoginClick",
        defaultButton: true,
      },
      {
        text: "Register",
        handler: "onRegisterClick",
      },
      // {
      //   text: "Forgot Password",
      //   handler: "onForgotPasswordClick",
      // },
    ],
  },
});
