var React = require('react'),
    proptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

const black = "black";
const green = "green";
	
var TableCell = React.createClass({
	propTypes: {
		addActive: proptypes.func.isRequired,
		removeActive: proptypes.func.isRequired
    },
	
	getInitialState : function() {
		return { currentValue : black, active : this.props.active, id : this.props.id}
	},
	
	handleClick: function(event) {
		console.log(this.props.active);
		if(this.state.currentValue == black) {
			this.props.addActive(this.state.id);
			this.setState({ currentValue : green });
			var _this = this;
			setTimeout( function() {
					_this.props.removeActive(_this.state.id);
					_this.setState({ currentValue: black });
			}, 2000)
		}
	},
	
	render: function() {		
		return (
			<td onClick={this.handleClick} className={this.state.currentValue} id={this.state.id}></td>
		);
	}
});

var mapStateToProps = function(state){
    return state.color;
};

var mapDispatchToProps = function(dispatch){
    return {
		addActive: function(id){
			dispatch(actions.addActive(id));
		},
		removeActive: function(id){
			dispatch(actions.removeActive(id));
		}
    }
};
module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(TableCell);