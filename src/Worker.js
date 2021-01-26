import React from 'react';
import './Worker.css';

const Worker = ({employeeID, name, status}) => {

	// console.log(name);
	return (
		<div className='searchResults'>
			<h3>{name}</h3>
			<h6>{status}</h6>
		</div>
	)
}

export default Worker;