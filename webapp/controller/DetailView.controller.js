sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"countriesCountryList/model/formatter"
], function (Controller, formatter) {
	"use strict";
	
	return Controller.extend("countriesCountryList.controller.DetailView", {
	formatter: formatter,
	
			onInit: function() {
				this.getView().bindElement("countryModel>/countries/0");
				this.getOwnerComponent().getRouter().getRoute("detail").attachPatternMatched(this._onRouteMatched, this);
			},
			
			_onRouteMatched : function (oEvent) {
				var sContext, sIndex;
				sContext = oEvent.getParameter("arguments").context;
				sIndex = oEvent.getParameter("arguments").index;
				this.getView().bindElement("countryModel>/" + sContext + "/" + sIndex);
				var sObjectPath = this.getOwnerComponent().getModel("countryModel").getProperty("/" + sContext + "/" + sIndex + "/detailInfo/flagURL");
				var path = jQuery.sap.getModulePath(this.getOwnerComponent().getMnisfestEntry("sap.app").id) + "/" + sObjectPath;
				this.getView().byId("flag").setSrc(path);
			}
	});
});