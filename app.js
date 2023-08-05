/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
  extend: "TaskManager.Application",

  name: "TaskManager",

  requires: [
    // This will automatically load all classes in the TaskManager namespace
    // so that application classes do not need to require each other.
    "TaskManager.*",
  ],
  stores: ["Users", "Tasks"],

  // The name of the initial view to create.
  mainView: "TaskManager.view.main.Main",
});
