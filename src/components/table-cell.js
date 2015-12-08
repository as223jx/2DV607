var React = require('react'),
    proptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

	
var TableCell = React.createClass({
	
	render: function() {	

		return (
			<td onClick={this.props.onClick} className={this.props.isActive} id={this.props.id}></td>
		);
	}
});

module.exports = TableCell;