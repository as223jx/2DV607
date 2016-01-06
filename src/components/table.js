var React = require('react'),    
	proptypes = React.PropTypes,
	TableCell = require('./table-cell'),
    ReactRedux = require('react-redux'),
    actions = require('../actions');

const black = "black";
const green = "green";

var Table = React.createClass({

    render: function(){
		var id = 0;
		var cells = [];
		var rows = [];
		var hasmole;
		var click;

		for(var i = 0; i < 4; i++) {
			for(var j = 0; j < 4;j++) {
				if(this.props.activeCells[id]){
					click = null;
					hasmole = true;
				}
				else{
					hasmole = false;
				}
				click = this.props.onClick.bind(this, id);

				cells.push(<TableCell id={id} hasMole={hasmole} onClick={click} corpses={this.props.corpses[id]||[]} />);
				id++;
			}

			rows.push(<tr>{cells}</tr>);
			cells=[];
		}

        return (
				<table><tbody>{rows}</tbody></table>
        );
    }
});

module.exports = Table;