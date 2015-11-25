var React = require('react'),
    proptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');


var TableCell = React.createClass({
	propTypes: {
		black: proptypes.func.isRequired,
		green: proptypes.func.isRequired
	},

	handleClick: function(event) {
		if(this.props.currentValue == "black") {
			this.props.green;
		}
		else {
			this.props.black;
		}
	},
	render: function() {
		if(this.props.currentValue == "black") {
		return (
			<td onClick={this.props.green} className={this.props.currentValue}></td>
		);
				}
		else {
		return (
			<td onClick={this.props.black} className={this.props.currentValue}></td>
		)};		
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