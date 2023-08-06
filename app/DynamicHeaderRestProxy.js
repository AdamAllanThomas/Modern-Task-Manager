Ext.define("TaskManager.proxy.DynamicHeaderRestProxy", {
  extend: "Ext.data.proxy.Rest",
  alias: "proxy.dynamicheaderrest",

  getHeaders: function () {
    return {
      Authorization: "Bearer " + localStorage.getItem("JWTToken"),
    };
  },
});
