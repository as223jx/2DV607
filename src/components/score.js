var React = require('react'),
    proptypes = React.PropTypes;

var Score = (props)=> { return <p>Score: {props.score} | HP: {props.hp}</p>; };

module.exports = Score;