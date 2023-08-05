/**
 * This view is an example list of people.
 */
Ext.define("TaskManager.view.tasks.List", {
  extend: "Ext.grid.Grid",
  xtype: "tasklist",
  id: "tasklist",
  requires: [
    "TaskManager.store.Tasks",
    "TaskManager.store.Users",
    "Ext.grid.plugin.PagingToolbar",
    "Ext.grid.plugin.SummaryRow",
    "Ext.grid.plugin.CellEditing",
    "Ext.form.field.ComboBox",
    "Ext.form.Panel",
  ],
  title: "Tasks",
  controller: "tasks",
  store: {
    type: "tasks",
  },
  plugins: {
    pagingtoolbar: true,
    gridsummaryrow: true,
    cellediting: {
      clicksToEdit: 2,
    },
  },
  selModel: {
    mode: "multi",
  },
  editable: true,

  columns: [
    {
      text: "Name",
      dataIndex: "name",
      width: 100,
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
      text: "Description",
      dataIndex: "description",
      flex: 1,
      editor: {
        xtype: "textfield",
        allowBlank: false,
      },
    },
    {
      text: "Due Date",
      dataIndex: "dueDate",
      width: 100,
      xtype: "datecolumn",
      format: "Y-m-d",
      editor: {
        xtype: "datefield",
        allowBlank: false,

        dateFormat: "Y-m-d",
      },
    },
    {
      text: "Status",
      dataIndex: "status",
      width: 110,
      editor: {
        xtype: "combobox",
        forceSelection: true,
        allowBlank: false,
        store: ["New", "In Progress", "Completed"],
        displayField: "field1",
        valueField: "field1",
        queryMode: "local",
      },
    },
    {
      text: "Priority",
      dataIndex: "priority",
      width: 100,
      editor: {
        xtype: "combobox",
        allowBlank: false,
        forceSelection: true,
        store: ["Low", "Medium", "High"],
        displayField: "field1",
        valueField: "field1",
        queryMode: "local",
      },
    },
    {
      text: "Assignee",
      dataIndex: "assignedTo",
      width: 130,
      renderer: "assigneeRenderer",
      editor: {
        xtype: "combobox",
        allowBlank: false,
        store: {
          type: "users",

          autoLoad: true,
        },
        displayField: "name",
        valueField: "id",
      },
    },
  ],

  items: [
    {
      xtype: "toolbar",
      docked: "top",
      items: [
        {
          xtype: "searchfield",
          id: "searchfield",
          name: "search",
          placeholder: "Search...",
          clearable: true,
          flex: 1,
          listeners: {
            change: "onSearch",
          },
        },
        {
          xtype: "button",
          text: "Add",
          iconCls: "x-fa fa-plus",
          handler: "onAddButtonClick",
        },
        {
          xtype: "button",
          text: "Delete",
          iconCls: "x-fa fa-minus",
          handler: "onRemoveButtonClick",
        },
      ],
    },
  ],
});
