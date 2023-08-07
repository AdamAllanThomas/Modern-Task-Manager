Ext.define("TaskManager.view.tasks.AddTaskWindow", {
  extend: "Ext.window.Window",
  xtype: "addtaskwindow",
  requires: ["Ext.form.Panel"],

  modal: true,
  width: 400,
  layout: "fit",
  title: "Add New Task",
  controller: "tasks",

  items: [
    {
      xtype: "addtaskform",
    },
  ],
  buttons: [
    {
      text: "Save",
      handler: "onSaveTask",
    },
    {
      text: "Cancel",
      handler: "onCancelAddTask",
    },
  ],
});
