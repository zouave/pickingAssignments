import React, {Fragment} from 'react';
import WorkerTest from './WorkerTest';
import {workers} from './workers';

const WorkersPage = () => {
	const [searchField, setSearchField] = React.useState('');
	const filteredWorkers = workers.filter(worker => {
		return worker.name.toLowerCase().includes(searchField.toLowerCase());
	});

	const assignWorker = () => {
		console.log('assignWorker');
	}

	const workerSelected = () => {
		console.log('workerSelected');
	}

	return (
		<Fragment>
			<table>
				<thead>
					<tr>
						<th className='invoiceNumber border'>Employee ID</th>
						<th className='comapny border'>Selector</th>
						<th className='quantity border'>Assignments</th>
					</tr>
				</thead>
				<tbody>
				{
					filteredWorkers.map(worker => 
						<WorkerTest
							key={worker.id}
							id={worker.id}
							name={worker.name}
							status={worker.status}
							assignWorker={assignWorker}
							workerSelected={workerSelected}
							resetSearchField={() => setSearchField('')}		
						/>
					)
				}
				</tbody>
			</table>
		</Fragment>
	)
}

export default WorkersPage;