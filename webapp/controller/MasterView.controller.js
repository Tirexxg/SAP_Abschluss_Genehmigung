sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"Urlaubsgenehmigung/model/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("Urlaubsgenehmigung.controller.MasterView", {
		formatter: formatter,

		onLiveChange: function(oEvent) {
			var sQuery = oEvent.getParameter("newValue");
			var oFilter = new Filter("Name", FilterOperator.Contains, sQuery);
			var oBinding = this.byId("list").getBinding("items");
			oBinding.filter([oFilter]);
		}
		onListPressed: function(oEvent) {
			var sPath = oEvent.getSource().getSelectedItem().getBindingContext("countryModel").getPath();
			var aContext = sPath.split("/");

			this.getOwnerComponent().getRouter().navTo("detail", {
				context: aContext[1],
				index: aContext[2]
			});
		}
	});

});