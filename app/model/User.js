Ext.define("TaskManager.model.User", {
  extend: "TaskManager.model.Base",

  fields: [
    "id",
    "name",
    "email",
    "phone",
    "username",
    "password",
    "profile_picture",
    "role",
    "street_address",
    "city",
    "state",
    "country",
    "postal_code",
  ],
});
