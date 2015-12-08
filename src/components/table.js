var React = require('react'),
	TableCell = require('./table-cell'),
    ReactRedux = require('react-redux'),
    actions = require('../actions');

var Table = React.createClass({

    render: function(){
		id = 0;
		cells = [];
		rows = [];
		
		for(var i = 0; i < 4; i++) {
			for(var j = 0; j < 4;j++) {
				cells.push(<TableCell id={id++} />);
			}
			rows.push(<tr>{cells}</tr>);
			cells=[];
		}
        return (
            <div>
				<table><tbody>{rows}</tbody></table>
            </div>
        );
    }
});


module.exports = Table;