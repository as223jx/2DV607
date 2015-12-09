var Redux = require('redux');
var activeReducer = require('./reducers/active');
var initialState = require('./initial-state');
var actions = require('./actions');
var thunk = require('redux-thunk');

var reducers = Redux.combineReducers({
	table: activeReducer
});

module.exports = Redux.applyMiddleware(thunk)(Redux.createStore)(reducers, initialState());