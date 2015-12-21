var React = require('react'),
	Home = require('./home');
	
var Wrapper = React.createClass({
    render: function() {
        return (
            <div className="wrapper">
                <h2>Very unfinished Whack-A-Mole!</h2>
                <Home />
            </div>
        );
    }
});

module.exports = Wrapper;