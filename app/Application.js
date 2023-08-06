Ext.define("TaskManager.Application", {
  extend: "Ext.app.Application",

  name: "TaskManager",

  quickTips: false,
  platformConfig: {
    desktop: {
      quickTips: true,
    },
  },

  viewModel: "TaskManager.view.main.MainModel",

  launch: function () {
    var jwtToken = localStorage.getItem("JWTToken");
    var refreshToken = localStorage.getItem("RefreshToken");
    if (jwtToken && refreshToken) {
      Ext.Ajax.request({
        url: "http://localhost:8000/api/token/verify/",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        jsonData: { token: jwtToken },
        success: function () {
          Ext.Ajax.request({
            url: "http://localhost:8000/api/users/me/",
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + jwtToken, // Add this header
            },
            success: function (response) {
              const currentUserData = Ext.getStore("CurrentUser").getData();
              console.log(currentUserData);
              Object.assign(currentUserData, {
                ...Ext.decode(response.responseText),
              });
            },
          });
        },
        failure: function () {
          Ext.create({
            xtype: "login",
          }).show();
        },
      });
    } else {
      Ext.create({
        xtype: "login",
      }).show();
    }
  },

  onAppUpdate: function () {
    Ext.Msg.confirm(
      "Application Update",
      "This application has an update, reload?",
      function (choice) {
        if (choice === "yes") {
          window.location.reload();
        }
      }
    );
  },
});
