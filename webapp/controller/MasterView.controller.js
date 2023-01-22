sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	
	return Controller.extend("genehmigung.controller.MasterView", {
		
		onInit: function() {
			var oModel = this.getOwnerComponent().getModel();
		},
		
		onListPressed: function(oEvent){
			var sPath = oEvent.getSource().getSelectedItem().getBindingContext("countryModel").getPath();
			var aContext = sPath.split("/");
		
			this.getOwnerComponent().getRouter().navTo("detail",{
				context: aContext[1],
				index: aContext[2]
			});
		}
	});
});