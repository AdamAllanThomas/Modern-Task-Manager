/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define("TaskManager.view.main.Main", {
  extend: "Ext.tab.Panel",
  xtype: "app-main",

  requires: ["Ext.MessageBox", "Ext.layout.Fit"],

  controller: "main",
  viewModel: "main",

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
