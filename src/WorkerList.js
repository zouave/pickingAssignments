import React, {Fragment} from 'react';
import Worker from './Worker';
import './WorkerList.css';

const WorkerList = ({workers}) => {

	return (
		<Fragment>
			{
				workers.map(worker => 
					<Worker
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