var React = require('react');
var ReactDOM = require('react-dom');

var Table = React.createClass({
	render: function() {
		return (
			<table>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			</table>
		);
	}
	
});

ReactDOM.render(
	<Table />,
	document.getElementById('container')
);