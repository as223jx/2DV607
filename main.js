var React = require('react');
var ReactDOM = require('react-dom');

var rows = 4;
var cols = 4;

var TableCell = React.createClass({
	render: function() {
		return (
			<td></td>
		)
	}
});

var TableRow = React.createClass({
	render: function() {
		cells = [];
		for(var i = 0; i < this.props.colcount; i++) {
			cells.push(<TableCell />);
		}
		return (
			<tr>{cells}</tr>
		);
	}
});

var Table = React.createClass({
	render: function() {
		var rows = [];
		for(var i = 0; i < this.props.rowcount; i++) {
			rows.push(<TableRow colcount={this.props.colcount} />);
		}
		return (
			<table>
			{rows}
			</table>
		);
	}
});


ReactDOM.render(
	<Table rowcount={rows} colcount={cols} />,
	document.getElementById('table')
);