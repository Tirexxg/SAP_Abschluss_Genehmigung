sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("genehmigung.controller.MainView", {
		onInit: function () {
			this.getView().setModel(new JSONModel(), "app");
		}
	});
});