var React = require('react'),
    proptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
	Home = require('./home');
	
var Wrapper = React.createClass({
    render: function() {
        propTypes: {
            gameOver: proptypes.bool.isRequired
         }

        var gameOver = this.props.gameOver;

        return (
            <div className="wrapper">
                <h2>Very unfinished Whack-A-Mole!</h2>
                {gameOver
                        ? <div className="gameOver"></div>
                        : null
                    }
                <Home />
            </div>
        );
    }
});

var mapStateToProps = function(state){
    return {
        gameOver: state.table.gameOver
    };
};

module.exports = ReactRedux.connect(mapStateToProps)(Wrapper);