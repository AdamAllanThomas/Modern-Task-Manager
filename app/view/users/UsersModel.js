Ext.define("TaskManager.view.users.UsersModel", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.userlistmodel",

  data: {
    titleText: "Users",
  },

  stores: {
    users: {
      type: "users",
      sorters: [
        {
          property: "name",
          direction: "ASC",
        },
      ],
    },
  },
});
