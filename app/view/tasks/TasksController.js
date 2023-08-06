Ext.define("TaskManager.view.tasks.TasksController", {
  extend: "Ext.app.ViewController",

  alias: "controller.tasks",

  assigneeRenderer: function (userId) {
    var user = Ext.getStore("Users").findRecord("id", userId);
    return user ? user.get("name") : "Unknown";
  },

  onSearch: function () {
    var me = this;
    var store = me.getView().getStore();
    var searchValue = Ext.getCmp("searchfield").getValue().toLowerCase();
    store.clearFilter();
    store.filterBy(function (record) {
      var name = record.get("name").toLowerCase();
      var description = record.get("description").toLowerCase();
      var assignedTo = record.get("assignedTo");
      var assignee = me.assigneeRenderer(assignedTo).toLowerCase();
      return (
        name.indexOf(searchValue) !== -1 ||
        description.indexOf(searchValue) !== -1 ||
        assignee.indexOf(searchValue) !== -1
      );
    });
  },

  onAddButtonClick: function () {
    var addTaskWindow = Ext.create("TaskManager.view.tasks.AddTaskWindow");
    addTaskWindow.show();
    var taskForm = addTaskWindow.down("formpanel");
    taskForm.setValues({
      assignedTo: Ext.getStore("CurrentUser").getData().id,
    });
  },

  onSaveTask: function (btn) {
    var values = btn
      .up("window")
      .down("formpanel[reference=addTaskForm]")
      .getValues();
    values.dueDate = formatDateToYYYYMMDD(values.dueDate);
    Ext.getStore("Tasks").add(values);
    Ext.getCmp("tasklist").getStore().load();
    btn.up("window").close();
  },

  onCancelAddTask: function (btn) {
    btn.up("window").close();
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

  onAfterRender: function () {
    var window = this.getView();
    console.log(window);
    var combo = window.down('combobox[name="assignedTo"]');
    console.log(combo);
    var userId = window.getViewModel().get("currentUser").id;
    console.log(userId);
    combo.value = userId;
  },
});

function formatDateToYYYYMMDD(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}
