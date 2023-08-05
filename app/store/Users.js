Ext.define("TaskManager.store.Users", {
  extend: "Ext.data.Store",
  alias: "store.users",
  model: "TaskManager.model.User",
  autoLoad: true,
  autoSync: true,
  proxy: {
    type: "rest",
    url: "http://localhost:8000/api/users/",
    reader: {
      type: "json",
      rootProperty: "data",
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
