var Redux = require('redux');
var colorReducer = require('./reducers/color');
var activeReducer = require('./reducers/active');
var initialState = require('./initial-state');
var actions = require('./actions');

var reducers = Redux.combineReducers({
	color: colorReducer,
	active: activeReducer
});

var store = Redux.createStore(reducers, initialState());
console.log(store.getState())
store.dispatch({ type: 'ADD_ACTIVE', id: 1})
console.log(store.getState())

module.exports = store;