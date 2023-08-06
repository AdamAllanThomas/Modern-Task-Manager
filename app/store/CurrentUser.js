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
    role: null,
    street_address: null,
    city: null,
    state: null,
    postal_code: null,
  },

  proxy: {
    type: "memory",
    reader: {
      type: "json",
      rootProperty: "data",
    },
  },
});
