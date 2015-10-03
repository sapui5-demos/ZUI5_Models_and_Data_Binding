sap.ui.controller("sap.training.view.Main2", {

	onInit: function() {

		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData("json/data_2.json");
		this.getView().setModel(oModel);

	}

});