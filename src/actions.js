module.exports = {
	addActive: function(id){
		return function(dispatch, getState){
			dispatch({type:'ADD_ACTIVE', id:id});
			setTimeout(function(){
				dispatch({type:'REMOVE_ACTIVE', id:id});
			},2000);
		}
	},
/* 	removeActive: function(id){
		return {type: 'REMOVE_ACTIVE', id: id};
	} */
};