Ext.define("TaskManager.view.settings.UserTasksGrid", {
  requires: ["TaskManager.view.settings.SettingsModel"],
  extend: "Ext.grid.Grid",
  xtype: "usertasksgrid",
  alias: "widget.usertasksgrid", // Register the alias with ExtJS
  title: "My Tasks",
  flex: 1,
  margin: "0 0 0 10",
  viewModel: "settings",
  bind: {
    store: "{CurrentUserTasks}",
  },
  columns: [
    {
      text: "Name",
      dataIndex: "name",
      flex: 1,
    },
    {
      text: "Description",
      dataIndex: "description",
      flex: 1,
    },
    {
      text: "Due Date",
      dataIndex: "dueDate",
      width: 100,
      xtype: "datecolumn",
      format: "Y-m-d",
    },
    {
      text: "Status",
      dataIndex: "status",
      width: 110,
    },
    {
      text: "Priority",
      dataIndex: "priority",
      width: 100,
    },
  ],
});
