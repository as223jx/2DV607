var React = require('react'),
    proptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');


var TableCell = React.createClass({
	propTypes: {
        green: proptypes.func.isRequired,
        black: proptypes.func.isRequired
    },
	
	getInitialState : function() {
		return { currentValue : this.props.currentValue };
	},
	
	handleClick: function(event) {
		if(this.state.currentValue == "black") {
			var _this = this;
			_this.setState({ currentValue : "green" });
			setTimeout( function() {
					_this.setState({ currentValue: "black" });				
			}, 2000)
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