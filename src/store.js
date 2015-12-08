var Redux = require('redux');
var activeReducer = require('./reducers/active');
var initialState = require('./initial-state');
var actions = require('./actions');
var thunk = require('redux-thunk');

var reducers = Redux.combineReducers({
	table: activeReducer
});

//var store = Redux.createStore(reducers, initialState());
//console.log(store.getState())
module.exports = Redux.applyMiddleware(thunk)(Redux.createStore)(reducers, initialState());