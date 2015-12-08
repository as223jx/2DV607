var initialState = require('./../initial-state');

var ActiveReducer = function(state, action){
	console.log('ActiveReducer called. Current state: ', state, ', action:', action)
	var newState = Object.assign({}, state);
	console.log(newState.active);
	switch(action.type){
		case 'ADD_ACTIVE':
		console.log(action);
		newState.active.push(action.id);
			//newState.active = [...newState.active, action.id ];
			return newState;
		case 'REMOVE_ACTIVE':
			var index = newState.active.indexOf(action.id);
			if(index != -1) newState.active.splice(index, 1); 
			return newState;
		default:
		return state || initialState().table;
	}
};

module.exports = ActiveReducer;