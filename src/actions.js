module.exports = {
	addActive: function(id){
		return function(dispatch, getState){
			dispatch({type:'ADD_ACTIVE', id:id});
			setTimeout(function(){
				dispatch({type:'REMOVE_ACTIVE', id:id});
			},2000);
		}
	},

	startGame: function(){
		return function(dispatch, getState){

				var addRandom = (function(){
					if(getState().table.started){
						//If a mole is active when time runs out, it's a miss
						var obj = getState().table.active;
						for(var prop in obj) {
							if(obj.hasOwnProperty(prop))
							dispatch({type:'MISS_MOLE'});
						}

						getState().table.active = {};

						var random = Math.floor((Math.random() * 15) +1);
						dispatch({type:'ADD_ACTIVE', id:random});

						setTimeout(addRandom,getState().table.delay);
					}
				});
				dispatch({type:'START_GAME'});
				addRandom();
			}
	},
	
	stopGame: function(){
		return {type:'STOP_GAME'};
	},
	
	clickSquare: function(id){
		return function(dispatch, getState){
			if(getState().table.started && getState().table.active[id]){
				dispatch({type:'KILL_MOLE', id:id});
				dispatch({type:'REMOVE_ACTIVE', id:id});
			}
			else{
				dispatch({type:'MISS_MOLE'});
			}
		}
	}
};