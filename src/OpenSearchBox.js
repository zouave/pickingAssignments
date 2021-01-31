import React from 'react';
import SearchWorker from './SearchWorker';

const OpenSearchBox = ({filteredWorkers, searchWorker}) => {

	return (
		<SearchWorker 
			filteredWorkers={filteredWorkers} 
			searchWorker={searchWorker} 
		/>
	)


}

export default OpenSearchBox;