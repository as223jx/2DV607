var initialState = require('./../initial-state');

var ActiveReducer = function(state, action){
	console.log('ActiveReducer called. Current state: ', state, ', action:', action)
	var newState = Object.assign({}, state);
	console.log(newState.active);
	switch(action.type){
		case 'ADD_ACTIVE':
			newmole = true;
			newState.active[action.id] = newmole;
			return newState;
		case 'REMOVE_ACTIVE':
			delete newState.active[action.id];
			return newState;
		case 'START_GAME':
			if(!newState.started){
				newState.started = true;
			}
			return newState;
		case 'STOP_GAME':
			if(newState.started){
				newState.started = false;
			}
			return newState;
		case 'KILL_MOLE':
		console.log(action.id);
			if(newState.started && newState.active[action.id]){
				newState.score ++;
			}
			return newState;
		case 'MISS_MOLE':
			if(newState.started && newState.score > 0){
				newState.score--;
			}
			return newState;
		default:
		return state || initialState().table;
	}
};

module.exports = ActiveReducer;