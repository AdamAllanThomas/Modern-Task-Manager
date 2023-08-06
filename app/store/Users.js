Ext.define("TaskManager.store.Users", {
  extend: "Ext.data.Store",
  alias: "store.users",
  model: "TaskManager.model.User",
  autoLoad: true,
  autoSync: true,
  proxy: {
    type: "dynamicheaderrest",
    url: "http://localhost:8000/api/users/",
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
