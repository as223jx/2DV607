var React = require('react'),
    proptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

	
var TableCell = (props)=> {
	var splatter = props.corpses.map((corpse,n)=>(
		<div key={n} className="blood" style={{
			backgroundImage: "url(img/blood"+corpse.blood+".png)",
			transform: "rotate("+corpse.rotation+"deg)"
		}}/>
	));
	return (
		<td onClick={props.onClick} id={props.id}>
			{props.hasMole ? <div className="mole"/> : null}
			{splatter}
		</td>
	)
};

module.exports = TableCell;