var React = require('react'),
	TableCell = require('./table-cell'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

var Table = React.createClass({

    render: function(){
		cells = [];
		rows = [];
		for(var i = 0; i < 4; i++) {
			cells.push(<TableCell />);
		}
		for(var i = 0; i < 4; i++) {
			rows.push(<tr>{cells}</tr>);
		}
        return (
            <div>
				<table><tbody>{rows}</tbody></table>
            </div>
        );
    }
});


module.exports = Table;