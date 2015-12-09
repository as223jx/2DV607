var React = require('react'),    
	proptypes = React.PropTypes,
	Table = require('./tableNew'),
    ReactRedux = require('react-redux'),
    actions = require('../actions'),
	Score = require('./score');

const black = "black";
const green = "green";

var Home = React.createClass({
	
	propTypes: {
		tbl: proptypes.shape({active: proptypes.arrayOf(proptypes.number), score: proptypes.number.isRequired}).isRequired,
		addActive: proptypes.func.isRequired
    },
	
    render: function(){
		var tableprops = this.props.tbl;
        return (
            <div>
				<Table onClick={this.props.addActive} activeCells={tableprops.active} />
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
		}
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Home);