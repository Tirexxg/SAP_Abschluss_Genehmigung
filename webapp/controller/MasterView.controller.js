sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"genehmigung/model/formatter",
    "sap/m/Button",
    "sap/m/Bar"
], function(Controller, formatter, Button, Bar) {
	"use strict";
	
	return Controller.extend("genehmigung.controller.MasterView", {
		formatter: formatter,
		/*onInit: function() {
			//Create approve and reject buttons
			var approveButton = new Button("approveButton", {
				text: "Genehmigen",
				press: function() {
				//Your approve function
				}
			});
				var rejectButton = new Button("rejectButton", {
				text: "Ablehnen",
				press: function() {
				//Your reject function
				}
			});
			
			//Create a footer bar and add the buttons
			var footerBar = new Bar({
				contentRight: [approveButton, rejectButton]
			});

			//Add the footer bar to the page
			this.getView().byId("pageId").setFooter(footerBar);
		},*/
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