Ext.define("TaskManager.view.auth.AuthController", {
  extend: "Ext.app.ViewController",
  alias: "controller.auth",

  onLoginClick: function () {
    var formComponent = this.lookupReference("loginform");
    var values = formComponent.getValues();
    Ext.Ajax.request({
      url: "http://localhost:8000/api/token/",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      jsonData: values,
      success: function (response, opts) {
        var responseData = Ext.decode(response.responseText);
        if (responseData.access) {
          localStorage.setItem("JWTToken", responseData.access);
          localStorage.setItem("RefreshToken", responseData.refresh);
          window.location.reload();
        } else {
          Ext.Msg.alert("Login failed!", "Invalid credentials");
        }
      },
      failure: function (response, opts) {
        Ext.Msg.alert(
          "Login failed!",
          "Server-side failure with status code " + response.status
        );
      },
    });
  },

  onRegisterClick: function () {
    var loginWindow = this.getView();
    Ext.create({
      xtype: "register",
    }).show();
    loginWindow.destroy();
  },

  onRegisterSubmit: function () {
    var form = this.lookupReference("registrationform");
    var values = form.getValues();
    values["username"] = values["email"];
    Ext.Ajax.request({
      url: "http://localhost:8000/api/users/register/",
      method: "POST",
      jsonData: values,
      success: function () {
        this.onBackToLoginClick();
        Ext.Msg.alert(
          "Registration Successful",
          "Please login with your new credentials."
        );
      },
      failure: function () {
        Ext.Msg.alert(
          "Registration Failed",
          "Please check the details and try again."
        );
      },
      scope: this,
    });
  },

  onBackToLoginClick: function () {
    var registerWindow = this.getView();
    Ext.create({
      xtype: "login",
    }).show();
    registerWindow.destroy();
  },
});
