import React, {Fragment} from 'react';
import './SearchWorker.css';
import Scroll from './Scroll';
import WorkerList from './WorkerList';

const SearchWorker = ({searchWorker, filteredWorkers}) => {
	function inputBox() {
		return (
			<input
				className='searchBar pa3  ba b--green bg-lightest-blue'
				type='search' 
				placeholder='search workers'
				onChange={searchWorker}
			/>
		)
	}
	if(filteredWorkers.length > 0)
		return (
			<Fragment>
				{inputBox()}
				<Scroll>
					<WorkerList workers={filteredWorkers}/>
				</Scroll>
			</Fragment>
		)

	return inputBox()
}

export default SearchWorker;