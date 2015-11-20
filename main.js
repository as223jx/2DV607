var React = require('react');
var ReactDOM = require('react-dom');

var rows = 4;
var cols = 4;
var count = 0;

var TableCell = React.createClass({
	render: function() {
		var classname = "blocks";
		return (
			<td className={classname} id={this.props.id}></td>
		)
	}
});

var TableRow = React.createClass({
	render: function() {
		cells = [];
		for(var i = 0; i < this.props.colcount; i++) {
			cells.push(<TableCell id={count++} />);
		}
		return (
			<tr>{cells}</tr>
		);
	}
});

var Table = React.createClass({
	render: function() {
		var rows = [];
		count = 0;
		for(var i = 0; i < this.props.rowcount; i++) {
			rows.push(<TableRow colcount={this.props.colcount} id={count} />);
		}
		return (
			<table>
			<tbody>
			{rows}
			</tbody>
			</table>
		);
	}
});


ReactDOM.render(
	<Table rowcount={rows} colcount={cols} />,
	document.getElementById('table')
);