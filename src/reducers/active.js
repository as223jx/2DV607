var initialState = require('./../initial-state');

var ActiveReducer = function(state, action){
	console.log('ActiveReducer called. State: ', state, ', action:', action)
	var newState = Object.assign([], state);
	switch(action.type){
		case 'ADD_ACTIVE':
		return [...newState, action.id ]
		
		default:
		return state || initialState();
	}
};

module.exports = ActiveReducer;