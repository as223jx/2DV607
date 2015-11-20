var React = require('react');
var ReactDOM = require('react-dom');

var rows = 4;
var cols = 4;
var count = 0;

var TableRow = React.createClass({
	render: function() {
		var TableCell = React.createClass({
			getInitialState: function() {
				return {
					isSelected: false
				};
			},
			handleClick: function(event) {
				if(this.state.isSelected) {
					this.setState({
						isSelected: false
					})
				}
				else {
					this.setState({
						isSelected: true
					})
				}
			},
			render: function() {
				var classname = "blocks";
				var isSelected = this.state.isSelected;
				if(isSelected) {
					classname = "clicked";
				}
				
				return (
					<td onClick={this.handleClick} className={classname} id={this.props.id}></td>
				)
			}
		});

		cells = [];
		this.timer;
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