var React = require('react'),    
	proptypes = React.PropTypes,
	Table = require('./table'),
    ReactRedux = require('react-redux'),
    actions = require('../actions'),
	Score = require('./score');

const black = "black";
const green = "green";

var Home = React.createClass({
	
	propTypes: {
		tbl: proptypes.shape({active: proptypes.object.isRequired, score: proptypes.number.isRequired, started: proptypes.bool.isRequired}).isRequired,
		addActive: proptypes.func.isRequired,
		startGame: proptypes.func.isRequired,
		clickSquare: proptypes.func.isRequired
    },
	
    render: function(){
		var tableprops = this.props.tbl;
		var button = <button onClick={this.props.startGame}>Start</button>;
		if(tableprops.started){
			button = <button onClick={this.props.stopGame}>Stop</button>;
		}
        return (
            <div id='tableDiv'>
			{button}
				<Table onClick={this.props.clickSquare} activeCells={tableprops.active} />
				<Score score={tableprops.score} />
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
		},
		startGame: function(){
			dispatch(actions.startGame());
		},
		stopGame: function(){
			dispatch(actions.stopGame());
		},
		clickSquare: function(id){
			dispatch(actions.clickSquare(id));
		}
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Home);