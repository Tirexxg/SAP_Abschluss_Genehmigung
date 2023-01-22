sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	
	return Controller.extend("genehmigung.controller.MasterView", {
		
onInit: function () {
        var oList = this.byId("absenceList");
        var oModel = this.getOwnerComponent().getModel();
        oList.bindItems({
            path: "/AbsenceSet",
            template: new sap.m.ObjectListItem({
                title: "{Username}",
                attributes: [
                    new sap.m.ObjectAttribute({
                        text: {
                            path: "StartDate",
                            formatter: function (startDate) {
                                var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "dd.MM.yyyy" });
                                return "Beginn: "+oDateFormat.format(new Date(startDate));
                            }
                        }
                    }),
                    new sap.m.ObjectAttribute({
                        text: {
                            path: "EndDate",
                            formatter: function (endDate) {
                                var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "dd.MM.yyyy" });
                                return "Ende: "+oDateFormat.format(new Date(endDate));
                            }
                        }
                    })
                ]
            })
        });
        oList.setModel(oModel);
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