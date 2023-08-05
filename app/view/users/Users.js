Ext.define("TaskManager.view.users.List", {
  extend: "Ext.grid.Grid",
  xtype: "userlist",
  id: "userlist",
  requires: ["TaskManager.store.Users", "Ext.form.Panel"],
  controller: "users",
  viewModel: "userlistmodel",
  bind: {
    title: "{titleText}",
    store: "{users}",
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

  items: [
    {
      xtype: "toolbar",
      docked: "top",
      items: [
        {
          xtype: "button",
          text: "Add",
          iconCls: "x-fa fa-plus",
          handler: "onAddClick",
        },
        {
          xtype: "button",
          text: "Delete",
          iconCls: "x-fa fa-trash",
          handler: "onRemoveButtonClick",
        },
      ],
    },
  ],
});
