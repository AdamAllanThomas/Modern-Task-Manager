Ext.define("TaskManager.model.Task", {
  extend: "TaskManager.model.Base",

  fields: [
    "id",
    "name",
    "description",
    "dueDate",
    "status",
    {
      name: "priority",
      sortType: function (priority) {
        var priorityOrder = {
          Low: 0,
          Medium: 1,
          High: 2,
        };
        return priorityOrder[priority];
      },
    },
    "assignedTo",
  ],
});
