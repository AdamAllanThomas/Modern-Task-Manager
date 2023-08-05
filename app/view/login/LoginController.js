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
          console.log("Login successful!");
          localStorage.setItem("LoggedIn", true);
          localStorage.setItem("JWTToken", responseData.access); // Save the access token
          localStorage.setItem("RefreshToken", responseData.refresh); // Optionally, save the refresh token for later use
          var loginWindow = formComponent.up("window");
          loginWindow.close();
          var view = Ext.create({
            xtype: "app-main",
          });
          view.show();
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
});
