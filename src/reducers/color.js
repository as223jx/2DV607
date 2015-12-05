var initialState = require('./../initial-state');

var ColorReducer = function(state, action){
	console.log('ColorReducer called. Current state: ', state, ', action:', action)
	var newState = Object.assign({}, state);
	switch(action.type){
		case 'COLOR_BLACK':
			newState.currentValue = "black";
			return newState;
		case 'COLOR_GREEN':
			newState.currentValue = "green";
			return newState;
		case 'ADD_ACTIVE':
			newState.active = [...newState.active, action.id ];
			return newState;
		case 'REMOVE_ACTIVE':
			var index = newState.active.indexOf(action.id);
			if(index != -1) newState.active.splice(index, 1); 
			return newState;
		default:
		return state || initialState();
	}
};

module.exports = ColorReducer;