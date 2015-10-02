sap.ui.controller("sap.training.view.Main1", {

	onInit: function() {

		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData("json/data_1.json");
		this.getView().setModel(oModel);
		
		//this.getView().setModel(oModel, "model_1");

	}

});