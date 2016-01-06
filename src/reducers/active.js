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
				newState.active = {};
				newState.started = false;
				newState.delay = 2000;
				newState.hp = 3;
				newState.score = 0;
			}
			return newState;
		case 'KILL_MOLE':
			if(newState.started && newState.active[action.id]){
				newState.score ++;
				newState.delay = newState.delay - 50;
			}
			return newState;
		case 'MISS_MOLE':
			if(newState.started){
				newState.hp--;
			}
			return newState;
		default:
		return state || initialState().table;
	}
};

module.exports = ActiveReducer;