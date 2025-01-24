sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
], (Controller, UIComponent) => {
    "use strict";

    return Controller.extend("gestorcontenidos.controller.Main", {
        onInit() {
        },
        onBono: function(){
            let oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteGestorContenido");
        }
    });
});