var React = require('react'),
    proptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

var id = 0;

var TableCell = React.createClass({
	propTypes: {
        green: proptypes.func.isRequired,
        black: proptypes.func.isRequired,
		addActive: proptypes.func.isRequired,
		removeActive: proptypes.func.isRequired
    },
	
	getInitialState : function() {
		return { currentValue : this.props.currentValue, id : id }
	},
	
	handleClick: function(event) {
		if(this.state.currentValue == "black") {
			this.props.addActive(this.state.id);
			this.setState({ currentValue : "green" });
			setTimeout( function() {
					this.props.removeActive(this.state.id);
					this.setState({ currentValue: "black" });
			}.bind(this), 2000)
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
		},
		removeActive: function(id){
			dispatch(actions.removeActive(id));
		}
    }
};
module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(TableCell);