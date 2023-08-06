Ext.define("TaskManager.view.login.LoginController", {
  extend: "Ext.app.ViewController",
  alias: "controller.login",

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
    console.log("Register button clicked");
  },
});
