Ext.define("TaskManager.store.CurrentUser", {
  extend: "Ext.data.Store",
  alias: "store.currentuser",
  model: "TaskManager.model.CurrentUser",
  data: {
    id: null,
    name: null,
    email: null,
    phone: null,
    username: null,
    profile_picture: null,
  },

  proxy: {
    type: "memory",
    reader: {
      type: "json",
      rootProperty: "data",
    },
  },
});
