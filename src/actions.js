module.exports = {
	colorBlack: function(){
		return {type: 'COLOR_BLACK'};
	},
	colorGreen: function(){
		return {type: 'COLOR_GREEN'};
	},
	addActive: function(id){
		return {type: 'ADD_ACTIVE', id: id};
	}
};