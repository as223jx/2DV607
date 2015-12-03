var initialState = require('./../initial-state');

var ActiveReducer = function(state, action){
	console.log('ActiveReducer called. Current state: ', state, ', action:', action)
	var newState = Object.assign([], state);
	switch(action.type){
		case 'ADD_ACTIVE':
			return [...newState, action.id ]
		case 'REMOVE_ACTIVE':
			var index = newState.indexOf(action.id);
			if(index != -1) newState.splice(index, 1); 
			return 	newState;
		default:
		return state || initialState();
	}
};

module.exports = ActiveReducer;