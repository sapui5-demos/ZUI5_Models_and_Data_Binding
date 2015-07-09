sap.ui.controller("sap.training.view.FactoryFunctions", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf sap.training.view.FactoryFunctions
	 */
	onInit: function() {

		var oPanel = this.getView().byId("myPanel");

		oPanel.bindAggregation("content", "/data",
			function(sId, oContext) {

				var oLayout = new sap.ui.commons.layout.MatrixLayout();
				var oRow = new sap.ui.commons.layout.MatrixLayoutRow();

				var oObject = oContext.getObject();
				var prop;

				for (prop in oObject) {
					var oControl;
					var oCell = new sap.ui.commons.layout.MatrixLayoutCell();

					var sPath = "{" + prop + "}";
					
					switch (typeof oObject[prop]) {
						case "string":
							oControl = new sap.ui.commons.TextView({ text: sPath }); break;
						case "boolean":
							oControl = new sap.ui.commons.CheckBox({ checked: sPath }); break;
					}

					oCell.addContent(oControl);
					oRow.addCell(oCell);
				}
				
				oLayout.addRow(oRow);
				return oLayout;
			});
	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf sap.training.view.FactoryFunctions
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf sap.training.view.FactoryFunctions
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf sap.training.view.FactoryFunctions
	 */
	//	onExit: function() {
	//
	//	}

});