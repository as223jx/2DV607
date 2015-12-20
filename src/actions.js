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

					var random = Math.floor((Math.random() * 15) +1);
					dispatch({type:'ADD_ACTIVE', id:random});
					
					setTimeout(function(){
						if(getState().table.active.indexOf(random) != -1){
						dispatch({type:'REMOVE_ACTIVE', id:random});
						dispatch({type:'MISS_MOLE'});
						}
					},2000);
					setTimeout(addRandom,2000);
					}
				});
				dispatch({type:'START_GAME'});
				setTimeout(addRandom,2000);
			}
		
	},
	stopGame: function(){
		return function(dispatch, getState){
			dispatch({type:'STOP_GAME'});
		}
	},
	killMole: function(id){
		return function(dispatch, getState){
			console.log("Killmole");
			if(getState().table.started && getState().table.active.indexOf(id) != -1){
				dispatch({type:'KILL_MOLE', id:id});
				dispatch({type:'REMOVE_ACTIVE', id:id});
			}
		}
	}
};