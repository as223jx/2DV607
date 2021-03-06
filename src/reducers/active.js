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
				newState.gameOver = false;
				newState.delay = 2000;
				newState.hp = 3;
				newState.score = 0;
			}
			return newState;
		case 'STOP_GAME':
			if(newState.started){
				newState.active = {};
				newState.started = false;
				newState.gameOver = true;			
			}
			return newState;
		case 'KILL_MOLE':
			if(newState.started && newState.active[action.id]){
				newState.score ++;
				var percentage = 0.97;  // this will result in a percentage reduce of 3% every time there's a miss
				if(newState.delay < 400) { // never go faster than 0.4 sek
					newState.delay = 400;
					percentage = 1; 
				}
				newState.delay = newState.delay * percentage;
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