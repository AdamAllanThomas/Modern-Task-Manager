Ext.define("TaskManager.view.settings.UserInfoPanel", {
  extend: "Ext.panel.Panel",
  xtype: "userinfopanel",
  title: "Current User Info",
  width: 300,
  autoHeight: true,
  viewModel: "settings",

  items: [
    {
      xtype: "displayfield",
      fieldLabel: "Email",
      bind: "{currentUserData.email}",
      label: "Email",
    },
    {
      xtype: "displayfield",
      fieldLabel: "Name",
      bind: "{currentUserData.name}",
      label: "Name",
    },
    {
      xtype: "displayfield",
      fieldLabel: "Phone",
      bind: "{currentUserData.phone}",
      label: "Phone",
    },
    {
      xtype: "displayfield",
      fieldLabel: "Address",
      bind: "{currentUserData.street_address}",
      label: "Address",
    },
    {
      xtype: "displayfield",
      fieldLabel: "City",
      bind: "{currentUserData.city}",
      label: "City",
    },
    {
      xtype: "displayfield",
      fieldLabel: "State",
      bind: "{currentUserData.state}",
      label: "State",
    },
    {
      xtype: "displayfield",
      fieldLabel: "postal_code",
      bind: "{currentUserData.postal_code}",
      label: "Postal Code",
    },
    {
      xtype: "displayfield",
      fieldLabel: "Country",
      bind: "{currentUserData.country}",
      label: "Country",
    },
  ],
});
