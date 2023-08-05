Ext.define("TaskManager.view.tasks.TasksModel", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.taskslistmodel",

  data: {
    titleText: "Tasks",
  },

  stores: {
    tasks: {
      type: "tasks",
    },
  },
});
