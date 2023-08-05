Ext.define("TaskManager.store.Tasks", {
  extend: "Ext.data.Store",
  alias: "store.tasks",
  model: "TaskManager.model.Task",
  autoLoad: true,
  autoSync: true,
  proxy: {
    type: "rest",
    url: "http://localhost:3000/api/tasks",
    reader: {
      type: "json",
      rootProperty: "data",
    },
    writer: {
      type: "json",
      writeAllFields: true,
    },
  },
});
