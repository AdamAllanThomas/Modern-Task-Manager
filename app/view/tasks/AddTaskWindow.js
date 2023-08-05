Ext.define("TaskManager.view.tasks.AddTaskWindow", {
  extend: "Ext.window.Window",
  xtype: "addtaskwindow",
  requires: ["Ext.form.Panel"],

  modal: true,
  width: 400,
  layout: "fit",
  title: "Add New Task",
  controller: "tasks",
  items: [
    {
      xtype: "formpanel",
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
          allowBlank: false,
          value: 1, // TODO: Make this defualt to the current user
          forceSelection: true,
        },
      ],
    },
  ],
  buttons: [
    {
      text: "Save",
      handler: "onSaveTask",
    },
    {
      text: "Cancel",
      handler: "onCancelAddTask",
    },
  ],
});