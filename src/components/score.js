var React = require('react'),
    proptypes = React.PropTypes;

var Score = (props)=> { return <p>Current clicks: {props.score}</p>; };

module.exports = Score;