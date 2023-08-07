Ext.define("TaskManager.view.auth.Register", {
  extend: "Ext.window.Window",
  xtype: "register",
  reference: "register",

  requires: ["TaskManager.view.auth.AuthController", "Ext.form.Panel"],

  controller: "auth",
  bodyPadding: 10,
  title: "Registration Window",
  closable: false,
  autoShow: true,

  items: {
    xtype: "registrationform",
    buttons: [
      {
        text: "Return to Login",
        handler: "onBackToLoginClick",
      },
      {
        text: "Submit Registration",
        formBind: true,
        handler: "onRegisterSubmit",
        defaultButton: true,
      },
    ],
  },
});
