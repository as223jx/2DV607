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
				//clear the bloodsplatters
				getState().corpses = {};
				
				var addRandom = (function(){
					if(getState().table.started){
						//If a mole is active when time runs out, it's a miss
						var obj = getState().table.active;
						for(var prop in obj) {
							if(obj.hasOwnProperty(prop))
							dispatch({type:'MISS_MOLE'});

						}
						
						if(getState().table.hp <= 0){
							dispatch({type:'STOP_GAME'});
						}
						else{
							getState().table.active = {};

							var random = Math.floor((Math.random() * 16));
							dispatch({type:'ADD_ACTIVE', id:random});

							setTimeout(addRandom,getState().table.delay);
						}
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
				dispatch({type:'KILL_MOLE', id:id, blood:1+Math.floor((Math.random() * 4)), rotation:Math.floor((Math.random() * 360))});
				dispatch({type:'REMOVE_ACTIVE', id:id});
			}
			else{
				dispatch({type:'MISS_MOLE'});
				if(getState().table.hp <= 0){
					dispatch({type:'STOP_GAME'});
				}
			}
		}
	}
};