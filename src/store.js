var Redux = require('redux');
var colorReducer = require('./reducers/color');
var initialState = require('./initial-state');
var actions = require('./actions');

var reducers = Redux.combineReducers({
	color: colorReducer
});

var store = Redux.createStore(reducers, initialState());
console.log(store.getState())
module.exports = store;