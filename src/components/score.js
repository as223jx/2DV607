var React = require('react'),
    proptypes = React.PropTypes;

var Score = (props)=> { return <p>Color count: {props.score}</p>; };

module.exports = Score;