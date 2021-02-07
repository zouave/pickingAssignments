import React from 'react';
import './Worker.css';

const Worker = ({employeeID, name, status, assignWorker, workerSelected, resetSearchBar}) => {
	// console.log(name);
	return (
		<div onClick={resetSearchBar}>
			<div onClick={workerSelected}>
				<div className='searchResults' onClick={() => assignWorker(name)}>
					<h3>{name}</h3>
					<h6>{status}</h6>
				</div>
			</div>
		</div>
	)
}

export default Worker;