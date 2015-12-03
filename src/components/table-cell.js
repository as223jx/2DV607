var React = require('react'),
    proptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

var id = 0;

var TableCell = React.createClass({
	propTypes: {
        green: proptypes.func.isRequired,
        black: proptypes.func.isRequired,
		addActive: proptypes.func.isRequired
    },
	
	getInitialState : function() {
		return { currentValue : this.props.currentValue, id : id }
	},
	
	handleClick: function(event) {
		console.log(this.state.currentValue);
		console.log(this.state.id);
		if(this.state.currentValue == "black") {
			var _this = this;
			_this.props.addActive(this.state.id);
			_this.setState({ currentValue : "green" });
			setTimeout( function() {
					_this.setState({ currentValue: "black" });				
			}, 2000)
		}
	},
	render: function() {
		return (
			<td onClick={this.handleClick} className={this.state.currentValue} id={id++}></td>
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
        },
		addActive: function(id){
			dispatch(actions.addActive(id));
		}
    }
};
module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(TableCell);