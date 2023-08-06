Ext.define("TaskManager.view.users.List", {
  extend: "Ext.grid.Grid",
  xtype: "userlist",
  id: "userlist",
  requires: [
    "TaskManager.store.Users",
    "Ext.form.Panel",
    "Ext.grid.plugin.PagingToolbar",
    "Ext.grid.plugin.SummaryRow",
    "Ext.grid.plugin.CellEditing",
  ],
  controller: "users",
  viewModel: "userlistmodel",
  bind: {
    title: "{titleText}",
    store: "{users}",
  },
  plugins: {
    pagingtoolbar: true,
    gridsummaryrow: true,
    cellediting: {
      clicksToEdit: 2,
    },
    rowexpander: true,
  },

  itemConfig: {
    body: {
      tpl: `<img height="100" width="100" src="https://cdn.britannica.com/34/206334-050-7637EB66/French-fries.jpg" />`,
    },
  },

  height: "100%",
  editable: true,
  columns: [
    {
      text: "Name",
      dataIndex: "name",
      flex: 1,
      summary: "count",
      summaryRenderer: "totalCountRenderer",
      cell: {
        userCls: "bold",
      },
      editor: {
        xtype: "textfield",
        allowBlank: false,
      },
    },
    {
      text: "Email",
      dataIndex: "email",
      width: 230,
      editor: {
        xtype: "emailfield",
        allowBlank: false,
      },
    },
    {
      text: "Phone",
      dataIndex: "phone",
      width: 150,
      editor: {
        xtype: "textfield",
        allowBlank: false,
      },
    },
    {
      text: "Role",
      dataIndex: "role",
      width: 85,
      renderer: "roleRenderer",
    },
    {
      text: "Street Address",
      dataIndex: "street_address",
      width: 150,
      editor: {
        xtype: "textfield",
        allowBlank: false,
      },
    },
    {
      text: "City",
      dataIndex: "city",
      width: 150,
      editor: {
        xtype: "textfield",
        allowBlank: false,
      },
    },
    {
      text: "State",
      dataIndex: "state",
      width: 85,
      editor: {
        xtype: "textfield",
        allowBlank: false,
      },
    },
    {
      text: "Country",
      dataIndex: "country",
      width: 150,
      editor: {
        xtype: "textfield",
        allowBlank: false,
      },
    },
    {
      text: "Postal Code",
      dataIndex: "postal_code",
      width: 150,
      editor: {
        xtype: "textfield",
        allowBlank: false,
      },
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
