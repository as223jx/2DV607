var React = require('react'),    
	proptypes = React.PropTypes,
	TableCell = require('./table-cell'),
    ReactRedux = require('react-redux'),
    actions = require('../actions');

const black = "black";
const green = "green";

var Table = React.createClass({

    render: function(){
		id = 0;
		cells = [];
		rows = [];
		var color;
		var click;
		for(var i = 0; i < 4; i++) {
			for(var j = 0; j < 4;j++) {
				if(this.props.activeCells.indexOf(id) != -1){
					click = null;
					color = green;
				}
				else{
					color = black;
				}
				click = this.props.onClick.bind(this, id);

				cells.push(<TableCell id={id++} isActive={color} onClick={click} />);
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