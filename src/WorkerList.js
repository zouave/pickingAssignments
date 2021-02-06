import React, {Fragment} from 'react';
import Worker from './Worker';
import './WorkerList.css';

const WorkerList = ({workers, assignWorker, workerSelected, resetSearchBar}) => {

	return (
		<Fragment>
			{
				workers.map(worker => 
					<Worker
						resetSearchBar={resetSearchBar}
						workerSelected={workerSelected}
						assignWorker={assignWorker}
						key={worker.id}
						employeeID={worker.id}
						name={worker.name}
						status={worker.status}
					/>
				)
			}
		</Fragment>
	)
}

export default WorkerList;