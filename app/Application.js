/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define("TaskManager.Application", {
  extend: "Ext.app.Application",

  name: "TaskManager",

  quickTips: false,
  platformConfig: {
    desktop: {
      quickTips: true,
    },
  },

  views: ["TaskManager.view.login.Login", "TaskManager.view.main.Main"],

  launch: function () {
    var loggedIn = localStorage.getItem("LoggedIn");
    console.log("Logged In:", loggedIn); // Check the logged-in value
    var view = Ext.create({
      xtype: loggedIn ? "app-main" : "login",
      renderTo: Ext.getBody(),
    });
    console.log("View:", view);
    view.show();
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
