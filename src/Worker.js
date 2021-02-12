import React from 'react';
import './Worker.css';

const Worker = ({name, status, assignWorker, workerSelected, resetSearchField}) => {

	return (
		<div onClick={resetSearchField}>
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