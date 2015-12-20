var initialState = require('./../initial-state');

var ActiveReducer = function(state, action){
	console.log('ActiveReducer called. Current state: ', state, ', action:', action)
	var newState = Object.assign({}, state);
	console.log(newState.active);
	switch(action.type){
		case 'ADD_ACTIVE':
			newState.active.push(action.id);
			return newState;
		case 'REMOVE_ACTIVE':
			var index = newState.active.indexOf(action.id);
			if(index != -1) newState.active.splice(index, 1); 
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
		console.log(newState.active.indexOf(action.id));
			if(newState.started && newState.active.indexOf(action.id) != -1){
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