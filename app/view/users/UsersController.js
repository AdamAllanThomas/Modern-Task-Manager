Ext.define("TaskManager.view.users.UsersController", {
  extend: "Ext.app.ViewController",

  alias: "controller.users",

  onAddClick: function () {
    var win = Ext.create("TaskManager.view.users.AddUserWindow");
    win.show();
  },

  onSaveUser: function (btn) {
    var win = btn.up("window");
    var form = win.down("formpanel[reference=addUserForm]"); // Using the reference we defined earlier
    // var values = form.getValues();
    var values = form.getValues();
    values.username = values.email;
    var usersStore = Ext.getStore("Users");
    usersStore.add(values);
    var grid = Ext.getCmp("userlist");
    grid.getStore().load();
    win.close();
  },

  onCancelAddUser: function (btn) {
    var win = btn.up("window");
    win.close();
  },

  onRemoveButtonClick: function (sender, record) {
    Ext.Msg.confirm(
      "Confirm",
      "Are you sure you want to delete this user?",
      "onConfirm",
      this
    );
  },

  onConfirm: function (choice) {
    if (choice === "yes") {
      var grid = this.getView();
      var store = grid.getStore();
      var selectedRecords = grid.getSelection();
      store.remove(selectedRecords);
    }
  },
});
