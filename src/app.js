var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;
var store = require('./store');
var Wrapper = require('./components/wrapper');

ReactDOM.render(
	<Provider store={store}>
		<Wrapper/>
	</Provider>,
	document.getElementById('app')
);