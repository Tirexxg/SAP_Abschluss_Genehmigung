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
                            path: "ReqDate",
                            formatter: function (reqDate) {
                                var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "dd.MM.yyyy" });
                                return "Requestdate: "+oDateFormat.format(new Date(reqDate));
                            }
                        }
                    }),
                     new sap.m.ObjectAttribute({
                        text: {
                            path: "Description"
                        }
                    }),
                     new sap.m.ObjectAttribute({
                        text: {
                            path: "Status"
                        }
                    }),
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
    
    onSearch: function(oEvent) {
	    var sValue = oEvent.getParameter("query");
	    var oFilter = new sap.ui.model.Filter("Username", sap.ui.model.FilterOperator.Contains, sValue);
	    var oBinding = this.byId("absenceList").getBinding("items");
	    oBinding.filter([oFilter]);
	},
	
	onRefresh: function() {
	    var oBinding = this.byId("absenceList").getBinding("items");
	    oBinding.filter([]);
	    oBinding.refresh();
	},
	onListPressed: function(oEvent) {
		    var oSelectedItem = oEvent.getParameter("listItem");
		console.log(oSelectedItem);
		var oContext = oSelectedItem.getBindingContext();
				console.log(oContext);
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		oRouter.navTo("detail", {
		ReqId: oContext.getProperty("ReqId"),
		StartDate: oContext.getProperty("StartDate")
});
}

	});
});