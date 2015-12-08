var React = require('react'),
    proptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

	
var TableCell = (props)=> { return <td onClick={props.onClick} className={props.isActive} id={props.id}></td>; };

module.exports = TableCell;