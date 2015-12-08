module.exports = {
	addActive: function(id){
		return {type: 'ADD_ACTIVE', id: id};
	},
	removeActive: function(id){
		return {type: 'REMOVE_ACTIVE', id: id};
	}
};