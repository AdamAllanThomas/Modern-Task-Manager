Ext.define("TaskManager.view.tasks.TasksController", {
  extend: "Ext.app.ViewController",

  alias: "controller.tasks",

  assigneeRenderer: function (userId) {
    var usersStore = Ext.getStore("Users"); // Assuming the ID or alias of your users store is 'Users'
    var user = usersStore.findRecord("id", userId); // Assuming the field for userId in the users store is 'id'
    return user ? user.get("name") : "Unknown"; // Assuming the name field in the users store is 'name'
  },

  onSearch: function () {
    var grid = this.getView();
    var store = grid.getStore();
    var searchField = Ext.getCmp("searchfield");
    var searchValue = searchField.getValue().toLowerCase(); // Convert the search value to lowercase
    var me = this;
    store.clearFilter();
    store.filterBy(function (record) {
      var name = record.get("name").toLowerCase(); // Convert to lowercase
      var description = record.get("description").toLowerCase(); // Convert to lowercase
      var assignedTo = record.get("assignedTo");
      var assignee = me.assigneeRenderer(assignedTo).toLowerCase(); // Convert to lowercase
      return (
        name.indexOf(searchValue) !== -1 ||
        description.indexOf(searchValue) !== -1 ||
        assignee.indexOf(searchValue) !== -1
      );
    });
  },

  onAddButtonClick: function () {
    var win = Ext.create("TaskManager.view.tasks.AddTaskWindow");
    win.show();
  },

  onSaveTask: function (btn) {
    var win = btn.up("window");
    var form = win.down("formpanel[reference=addTaskForm]"); // Using the reference we defined earlier
    var values = form.getValues();
    var tasksStore = Ext.getStore("Tasks");
    tasksStore.add(values);
    var grid = Ext.getCmp("tasklist");
    grid.getStore().load();
    win.close();
  },

  onCancelAddTask: function (btn) {
    var win = btn.up("window");
    win.close();
  },

  onRemoveButtonClick: function () {
    var grid = this.getView();
    var store = grid.getStore();
    var selectedRecords = grid.getSelectable().getSelections();
    store.remove(selectedRecords);
  },

  totalCountRenderer: function (value, summaryData, dataIndex) {
    return value === 0 || value > 1 ? value + " Tasks" : value + " Task";
  },
});
