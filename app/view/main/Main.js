Ext.define("TaskManager.view.main.Main", {
  extend: "Ext.tab.Panel",
  xtype: "app-main",

  requires: ["Ext.MessageBox", "Ext.layout.Fit"],

  controller: "main",
  viewModel: "main",

  // make sure it fills the whole screen
  fullscreen: true,

  defaults: {
    tab: {
      iconAlign: "top",
    },
  },

  tabBarPosition: "bottom",

  items: [
    {
      title: "Home",
      iconCls: "x-fa fa-home",
      bind: {
        html: "{loremIpsum}",
      },
    },
    {
      title: "Tasks",
      iconCls: "x-fa fa-tasks",
      layout: "fit",
      items: [
        {
          xtype: "tasklist",
        },
      ],
    },
    {
      title: "Users",
      iconCls: "x-fa fa-users",
      layout: "fit",
      items: [
        {
          xtype: "userlist",
        },
      ],
    },

    {
      title: "My Profile",
      iconCls: "x-fa fa-user",
      layout: "fit",
      items: [
        {
          xtype: "usersettings",
        },
      ],
    },
  ],
});
