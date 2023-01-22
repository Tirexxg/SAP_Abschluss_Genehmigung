sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/resource/ResourceModel"
], function(Controller, ResourceModel) {
	"use strict";
	
	return Controller.extend("genehmigung.controller.MasterView", {
		
onInit: function () {
		//Import für i18n Sprachen
		var i18nModel = new ResourceModel({
            bundleName: "genehmigung.i18n.i18n"
	    });
	    this.getView().setModel(i18nModel, "i18n");
	    var oBundle = this.getView().getModel("i18n").getResourceBundle();
	    
	    //Definition Liste und Model
        var oList = this.byId("absenceList");
        var oModel = this.getOwnerComponent().getModel();
        
        //Ausgabe Liste in MasterView
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
                                return oBundle.getText("beginn")+": "+oDateFormat.format(new Date(startDate));
                            }
                        }
                    }),
                    new sap.m.ObjectAttribute({
                        text: {
                            path: "EndDate",
                            formatter: function (endDate) {
                                var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "dd.MM.yyyy" });
                                return oBundle.getText("ende")+": "+oDateFormat.format(new Date(endDate));
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