var Redux = require('redux');
var colorReducer = require('./reducers/color');
var initialState = require('./initial-state');

var reducers = Redux.combineReducers({
	color: colorReducer
});

var store = Redux.createStore(reducers, initialState());

module.exports = store;