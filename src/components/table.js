var React = require('react'),    
	proptypes = React.PropTypes,
	TableCell = require('./table-cell'),
    ReactRedux = require('react-redux'),
    actions = require('../actions');

const black = "black";
const green = "green";

var Table = React.createClass({
	
	propTypes: {
		tbl: proptypes.shape({active: proptypes.arrayOf(proptypes.number)}).isRequired,
		addActive: proptypes.func.isRequired
    },
	
    render: function(){
		var tableprops = this.props.tbl;
		id = 0;
		cells = [];
		rows = [];
		var color;
		var click;
		
		for(var i = 0; i < 4; i++) {
			for(var j = 0; j < 4;j++) {
				if(tableprops.active.indexOf(id) != -1){
					click = null;
					color = green;
				}
				else{
					click = this.props.addActive.bind(this, id);
					color = black;
				}

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

var mapStateToProps = function(state){
    return {tbl:state.table};
};

var mapDispatchToProps = function(dispatch){
    return {
		addActive: function(id){
			dispatch(actions.addActive(id));
		}
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Table);