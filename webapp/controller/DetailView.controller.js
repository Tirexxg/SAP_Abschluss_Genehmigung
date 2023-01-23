sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/resource/ResourceModel"
], function(Controller, ResourceModel) {
    "use strict";
    return Controller.extend("genehmigung.controller.DetailView", {
        onInit: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("detail").attachMatched(this._onRouteMatched, this);
        },
        
        _onRouteMatched: function(oEvent) {
        	console.log("_onRouteMatched function called");
            var oArgs = oEvent.getParameter("arguments");
            console.log(oArgs.ReqId);
            var sPath = "/AbsenceSet(" + oArgs.ReqId + ")";
            var oView = this.getView();
            var oModel = this.getView().getModel();
            this.getView().byId("flag").setText(oArgs.ReqId);
            oView.bindElement({
                path: "/AbsenceSet(" + oArgs.ReqId + ")",
                model: oModel
            });
        }
    });
});
