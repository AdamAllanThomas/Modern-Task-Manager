Ext.define("TaskManager.store.CurrentUserTasks", {
  extend: "Ext.data.Store",
  alias: "store.currentusertasks",
  model: "TaskManager.model.Task",
  autoLoad: true,
  autoSync: true,
  proxy: {
    type: "dynamicheaderrest",
    url: "http://localhost:8000/api/tasks/me/",
    reader: {
      type: "json",
      rootProperty: "results",
      totalProperty: "count",
    },
    writer: {
      type: "json",
    },
    actionMethods: {
      create: "POST",
      read: "GET",
      update: "PATCH",
      destroy: "DELETE",
    },
  },
});
