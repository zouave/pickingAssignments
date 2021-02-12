import React, {useState, Fragment} from 'react';
import SearchWorker from './SearchWorker';
import {workers} from './workers';
import './InvoiceBoxOptions.css';

const InvoiceBoxOptions = ({clickedSearch, id, assignWorker, selectedWorker}) => {
	const [searchField, setSearchField] = useState('');
	const [showSearchBar, setShowSearchBar] = useState(false);
	let filteredWorkers = [];

	if(searchField.length) {
		filteredWorkers = workers.filter(worker => {
			return worker.name.toLowerCase().includes(searchField.toLowerCase());
		})
	}
	
	const resetSearchField = () => {
		//This clears searchField resulting in empty list of workers
		setSearchField('');
	}

	return (
		<Fragment>
			<td colSpan='5' >
				<div className='flexit'>
					<button 
						className='box border pointer' 
						onClick={() => console.log('This is for Details button. For future referrence.')}>
						Details
					</button>
					<div>
						<button 
							className='showSearchBar pointer'
							onClick={() => setShowSearchBar(!showSearchBar)}>
								{showSearchBar ? 'Hide SearchBar':'Show SearchBar'}
							</button>
							{
								showSearchBar && 
								<SearchWorker
									inputBoxValue={searchField}
									filteredWorkers={filteredWorkers} 
									searchWorker={(event) => setSearchField(event.target.value)}
									assignWorker={assignWorker}
									resetSearchField={resetSearchField}
								/>
							}
					</div>
					{
						(selectedWorker.length) ?
							<button className='box border pointer picking'>Start Picking</button>:
							<button disabled className='box border picking not-allowed'>Start Picking</button>
					}
				</div>
			</td>

		</Fragment>
	)	
					
}


export default InvoiceBoxOptions;