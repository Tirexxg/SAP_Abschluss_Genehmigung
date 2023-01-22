sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"countriesCountryList/model/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("countriesCountryList.controller.MasterView", {
		formatter: formatter,
		
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