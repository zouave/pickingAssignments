import React from 'react';
import './test.css';

const WorkerTest = ({id, name, status, assignWorker, workerSelected, resetSearchField}) => {
	
	return (
			<tr className='test border'>
				<td className='border'>{id}</td>
				<td className='border'>{name}</td>
				<td className='border'>{status}</td>	
			</tr>	
	)
}

export default WorkerTest;