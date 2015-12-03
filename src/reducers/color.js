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
		default:
		return state || initialState();
	}
};

module.exports = ColorReducer;