var initialState = require('./../initial-state');

var Corpsereducer = function(state, action){
	var newState;
	switch(action.type){
		case 'KILL_MOLE':
			var newState = Object.assign({}, state); // TODO - deepcopy
			if (!newState[action.id]){
				newState[action.id] = [];
			}
			newState[action.id].push({ blood: action.blood, rotation: action.rotation });
			return newState;
		default: return state || initialState().corpses;
	}
};

module.exports = Corpsereducer;