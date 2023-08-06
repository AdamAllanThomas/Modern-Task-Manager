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
    xtype: "formpanel",
    reference: "registrationform",
    items: [
      {
        xtype: "textfield",
        name: "email",
        fieldLabel: "Email",
        vtype: "email", // Ensures valid email format
        allowBlank: false,
        placeholder: "Enter email",
      },
      {
        xtype: "textfield",
        name: "password",
        inputType: "password",
        fieldLabel: "Password",
        allowBlank: false,
        placeholder: "Enter password",
      },
      {
        xtype: "textfield",
        name: "phone",
        fieldLabel: "Phone",
        placeholder: "Enter phone number",
      },
      {
        xtype: "textfield",
        name: "name",
        fieldLabel: "Full Name",
        allowBlank: false,
        placeholder: "Enter full name",
      },
    ],
    buttons: [
      {
        text: "Submit Registration",
        formBind: true,
        handler: "onRegisterSubmit",
      },
      {
        text: "Return to Login",
        handler: "onBackToLoginClick",
      },
    ],
  },
});
