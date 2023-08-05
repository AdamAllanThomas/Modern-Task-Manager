Ext.define("TaskManager.view.users.List", {
  extend: "Ext.grid.Grid",
  xtype: "userlist",

  requires: ["TaskManager.store.Users"],

  title: "Users",

  store: {
    type: "users",
  },

  columns: [
    {
      text: "Name",
      dataIndex: "name",
      width: 100,
      cell: {
        userCls: "bold",
      },
    },
    {
      text: "Email",
      dataIndex: "email",
      width: 230,
    },
    {
      text: "Phone",
      dataIndex: "phone",
      width: 150,
    },
  ],

  listeners: {
    select: "onItemSelected",
  },
});
