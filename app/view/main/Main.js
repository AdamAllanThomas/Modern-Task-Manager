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
      layout: "fit",
      items: [
        {
          xtype: "tasklist",
        },
      ],
    },
    {
      title: "My Tasks",
      iconCls: "x-fa fa-tasks",
      bind: {
        html: "{loremIpsum}",
      },
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
      title: "Settings",
      iconCls: "x-fa fa-cog",
      bind: {
        html: "{loremIpsum}",
      },
    },
  ],
});
