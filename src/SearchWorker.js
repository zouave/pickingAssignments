import React, {Fragment} from 'react';
import './SearchWorker.css';
import Scroll from './Scroll';
import WorkerList from './WorkerList';

const SearchWorker = ({searchWorker, filteredWorkers}) => {
	if(filteredWorkers.length > 0)
		return (
			<Fragment>
				<input
					className='searchBar pa3  ba b--green bg-lightest-blue'
					type='search' 
					placeholder='search workers'
					onChange={searchWorker}
				/>
				<Scroll>
					<WorkerList workers={filteredWorkers}/>
				</Scroll>
			</Fragment>
		)

	return (
		<input
			className='searchBar pa3 ba b--green bg-lightest-blue'
			type='search' 
			placeholder='search workers'
			onChange={searchWorker}
		/>
	)
}

export default SearchWorker;