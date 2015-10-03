sap.ui.controller("sap.training.view.FactoryFunctions", {

	onInit: function() {

		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData("json/data_3.json");
		this.getView().setModel(oModel);

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
							oControl = new sap.ui.commons.TextView({
								text: sPath
							});
							break;
						case "boolean":
							oControl = new sap.ui.commons.CheckBox({
								checked: sPath
							});
							break;
					}

					oCell.addContent(oControl);
					oRow.addCell(oCell);
				}

				oLayout.addRow(oRow);
				return oLayout;
			});
	}

});