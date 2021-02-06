import React from 'react';
import SearchWorker from './SearchWorker';

const OpenSearchBox = ({filteredWorkers, searchWorker, assignWorker, selectedWorker, resetSearchBar}) => {

	return (
		<SearchWorker 
			filteredWorkers={filteredWorkers} 
			searchWorker={searchWorker}
			assignWorker={assignWorker}
			selectedWorker={selectedWorker}
			resetSearchBar={resetSearchBar}
		/>
	)


}

export default OpenSearchBox;