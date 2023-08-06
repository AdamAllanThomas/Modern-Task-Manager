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
              var user = Ext.decode(response.responseText);
              const currentUserStore = Ext.getStore("CurrentUser");
              const currentUserData = currentUserStore.getData();
              console.log(currentUserData);
              currentUserData.id = user.id;
              currentUserData.name = user.name;
              currentUserData.email = user.email;
              currentUserData.phone = user.phone;
              currentUserData.username = user.username;
              currentUserData.profile_picture = user.profile_picture;
              // currentUserStore.setData(currentUserData);
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
