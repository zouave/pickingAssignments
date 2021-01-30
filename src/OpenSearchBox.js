import React from 'react';
import SearchWorker from './SearchWorker';

const OpenSearchBox = ({filteredWorkers, searchWorker}) => {

	return (
		<SearchWorker 
			className='box1'  
			filteredWorkers={filteredWorkers} 
			searchWorker={searchWorker} 
		/>
	)


}

export default OpenSearchBox;