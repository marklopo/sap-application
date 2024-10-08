sap.ui.define(
  ["sap/ui/core/mvc/Controller"],

  function (Controller) {
    "use strict";

    return Controller.extend(
      "app.customers.newproject.controller.Zadanie_rekrutacyjne_TOYA_SA",
      {
        goToCustomersTable: function () {
          var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
          oRoute.navTo("RouteCustomers");
        },
      }
    );
  }
);
