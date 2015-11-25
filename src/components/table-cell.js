var React = require('react'),
    proptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');


var TableCell = React.createClass({
	getInitialState : function() {
		return { currentValue : this.props.currentValue };
	},
	
	handleClick: function(event) {
		console.log(this.state);
		if(this.state.currentValue == "black") {
			this.setState({ currentValue : "green" });
		}
		else {
			this.setState({ currentValue : "black" });
		}
	},
	render: function() {
		return (
			<td onClick={this.handleClick} className={this.state.currentValue}></td>
		);
	
	}
});
		
var mapStateToProps = function(state){
    return state.color;
};

var mapDispatchToProps = function(dispatch){
    return {
        green: function(){
            dispatch(actions.colorGreen());
        },
        black: function(){
            dispatch(actions.colorBlack());
        }
    }
};
module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(TableCell);