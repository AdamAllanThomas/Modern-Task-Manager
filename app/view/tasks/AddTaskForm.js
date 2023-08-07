Ext.define("TaskManager.view.tasks.AddTaskForm", {
  extend: "Ext.form.Panel",
  xtype: "addtaskform",
  requires: ["Ext.form.Panel"],
  reference: "addTaskForm",
  bodyPadding: 10,
  items: [
    {
      xtype: "textfield",
      name: "name",
      fieldLabel: "Name",
      allowBlank: false,
      placeholder: "Task Name",
    },
    {
      xtype: "textfield",
      name: "description",
      fieldLabel: "Description",
      allowBlank: false,
      placeholder: "Task Description",
    },
    {
      xtype: "datefield",
      name: "dueDate",
      fieldLabel: "Due Date",
      allowBlank: false,
      value: new Date(),
      forceSelection: true,
    },
    {
      xtype: "combobox",
      name: "status",
      fieldLabel: "Status",
      store: ["New", "In Progress", "Completed"],
      displayField: "field1",
      valueField: "field1",
      queryMode: "local",
      allowBlank: false,
      value: "New",
      forceSelection: true,
    },
    {
      xtype: "combobox",
      name: "priority",
      fieldLabel: "Priority",
      store: ["Low", "Medium", "High"],
      displayField: "field1",
      valueField: "field1",
      queryMode: "local",
      allowBlank: false,
      value: "Low",
      forceSelection: true,
    },
    {
      xtype: "combobox",
      name: "assignedTo",
      fieldLabel: "Assigned To",
      store: {
        type: "users",
      },
      displayField: "name",
      valueField: "id",
    },
  ],
});
