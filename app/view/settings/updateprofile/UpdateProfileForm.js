Ext.define("TaskManager.view.settings.updateprofile.UpdateProfileForm", {
  extend: "Ext.form.Panel",
  xtype: "updateprofileform",
  reference: "updateprofileform",
  layout: "form",
  defaultButton: "updateprofile",
  defaultFocus: "phone",
  items: [
    {
      xtype: "textfield",
      name: "phone",
      fieldLabel: "Phone",
      label: "Phone",
      allowBlank: false,
    },
    {
      xtype: "textfield",
      name: "name",
      fieldLabel: "Name",
      allowBlank: false,
      label: "Name",
    },
    {
      xtype: "textfield",
      name: "street_address",
      fieldLabel: "Street Address",
      allowBlank: false,
      label: "Street Address",
    },
    {
      xtype: "textfield",
      name: "city",
      fieldLabel: "City",
      allowBlank: false,
      label: "City",
    },
    {
      xtype: "textfield",
      name: "state",
      fieldLabel: "State",
      allowBlank: false,
      label: "State",
    },
    {
      xtype: "textfield",
      name: "country",
      fieldLabel: "Country",
      allowBlank: false,
      label: "Country",
    },
    {
      xtype: "textfield",
      name: "postal_code",
      fieldLabel: "Postal Code",
      allowBlank: false,
      label: "Postal Code",
    },
  ],
  buttons: [
    {
      text: "Update Profile",
      formBind: true,
      reference: "updateprofile",
      listeners: {
        click: "onUpdateProfileClick",
      },
    },
  ],
});
