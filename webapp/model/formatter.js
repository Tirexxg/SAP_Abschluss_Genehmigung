sap.ui.define([], function() {
	"use strict";
	return {
		_statusStateMap : {
			"V": "Success",
			"H": "Success",
			"M": "Warning",
			"L": "Error",
			"N": "None"
		},
		
		_statusTextMap: {
			"V": "Very High HDI",
			"H": "High HDI",
			"M": "Medium HDI",
			"L": "Low HDI",
			"N": "No Data about HDI"
		},
		
		statusText:function(value){
			var map = this.formatter._statusTextMap;
			return (value && map[value]) ? map [value] : "No Data about HDI";
		},
		
		statusState:function(value){
			var map = this.formatter._statusStateMap;
			return (value && map[value]) ? map[value] : "None";
		}
	};
});