var Redux = require('redux');
var activeReducer = require('./reducers/active');
var corpseReducer = require('./reducers/corpses');
var initialState = require('./initial-state');
var actions = require('./actions');
var thunk = require('redux-thunk');

var reducers = Redux.combineReducers({
	table: activeReducer,
	corpses: corpseReducer
});

module.exports = Redux.applyMiddleware(thunk)(Redux.createStore)(reducers, initialState());