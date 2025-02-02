sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("gestorcontenidos.controller.GestorContenido", {
        onInit() {
        },
        onPressItem: function(oEvent){
            alert("hola");
            //var oItem = oEvent.getSource();
            //var oItem = oEve.getSource().getSelectedItem().getBindingContext("mtooltip").getObject();
            //MessageToast.show(oItem.Label);
        },
        onAGTOOLTIP(oEvent){
           //console.log(this.getView().byId("L_TOOLTIP")); //Devuelve todo el contenido del la lista
           //console.log(this.getView().byId("L_TOOLTIP").getMetadata()); //Devuelve toda la metadata
           //console.log(this.getView().byId("L_TOOLTIP").getItems()); //Devuelve todo el contenido del la lista
           //console.log(this.getView().byId("L_TOOLTIP")); //Devuelve toda la metadata
            var oPanel = this.getView().byId("panelAGTooltip");
            console.log(oPanel.getMetadata());
            //var oItems = oList.getBinding("items");
            //var oModel = oItems.getModel().getMessages();
            console.log(oPanel.getInfoToolbar());
            //console.log(oModel);

            //console.log(this.getView().byId("L_TOOLTIP").getElementBinding());
            //console.log(this.getView().getViewName()); //Devuelve el nombre de la vista
            //console.log(oEvent.getSource().getId());
            //console.log(oEvent.getSource());
            //console.log(this.getView());
            //console.log(this.getView().getContent());

        },

      
        onBotonedit: function(oBotonedit){
            
        },
        onBotondelete: function(oBotondelete){
            alert("Botón delete");
        }
    });
});