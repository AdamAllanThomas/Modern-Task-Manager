Ext.define("TaskManager.view.settings.SettingsController", {
  extend: "Ext.app.ViewController",
  alias: "controller.settings",

  handleLogout: function () {
    localStorage.removeItem("JWTToken");
    localStorage.removeItem("RefreshToken");
    window.location.reload();
  },

  handleUpdateProfileOpen: function () {
    var updateProfile = Ext.create({
      xtype: "updateprofile",
    });
    updateProfile.show();
  },

  handleChangePasswordOpen: function () {
    var changePassword = Ext.create({
      xtype: "changepassword",
    });
    changePassword.show();
  },

  handleUpdateProfileSubmit: function () {
    var form = this.lookupReference("updateprofileform");
    var formValues = form.getValues();
    var me = this;
    var jwtToken = localStorage.getItem("JWTToken");
    Ext.Ajax.request({
      url: "http://localhost:8000/api/users/profile/update/",
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + jwtToken,
      },
      params: formValues,
      success: function (response) {
        Ext.ComponentQuery.query("userinfopanel")[0].updateInfo(
          Ext.decode(response.responseText)
        );
        Ext.Msg.alert("Success", "Profile updated successfully");
        me.getView().close();
      },
      failure: function (response) {
        Ext.Msg.alert("Failed", response.msg);
      },
    });
  },

  onChangePasswordSubmit: function () {
    var form = this.lookupReference("changepasswordform");
    var formValues = form.getValues();
    var me = this;
    var token = localStorage.getItem("JWTToken");
    // check to see if the new password and confirm password match
    if (formValues.newpassword !== formValues.confirmpassword) {
      Ext.Msg.alert("Failed", "New password and confirm password do not match");
      return;
    }
    Ext.Ajax.request({
      url: "http://localhost:8000/api/users/change-password/",
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + token,
      },
      params: {
        current_password: formValues.currentpassword,
        new_password: formValues.newpassword,
      },
      success: function () {
        me.getView().close();
        Ext.Msg.alert("Success", "Password updated successfully");
      },
      failure: function (response) {
        Ext.Msg.alert("Failed", response.msg);
      },
    });
  },

  onCancelUpdateProfile: function () {
    this.getView().close();
  },

  onCancelChangePassword: function () {
    this.getView().close();
  },
});
