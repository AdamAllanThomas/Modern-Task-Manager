Ext.define("TaskManager.view.tasks.TasksGridToolbar", {
  extend: "Ext.Toolbar",
  xtype: "tasksgridtoolbar",
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
});
