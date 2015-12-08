var React = require('react'),
    proptypes = React.PropTypes;

var Score = React.createClass({
	
	render: function() {	

		return (
			<p>Current clicks: {this.props.score}</p>
		);
	}
});

module.exports = Score;