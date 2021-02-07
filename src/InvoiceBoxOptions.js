import React, {useState, Fragment} from 'react';
import SearchWorker from './SearchWorker';
import {workers} from './workers';
import './InvoiceBoxOptions.css';

const InvoiceBoxOptions = ({clickedSearch, id, assignWorker, selectedWorker, resetSearchBar}) => {
	const [searchField, setSeearchField] = useState('');
	const [showSearchBar, setShowSearchBar] = useState(false);
	let filteredWorkers = [];


	if(searchField.length > 0 ) {
		filteredWorkers = workers.filter(worker => {
			return worker.name.toLowerCase().includes(searchField.toLowerCase());
		})
	}
	

		return (
			<Fragment>
				<td colSpan='5' >
					<div className='flexit'>
						<button 
							className='box border' 
							onClick={() => console.log('This is for Details button. For future referrence.')}>
							Details for Invoice
						</button>
						<div className=''>
							<button 
								onClick={() => setShowSearchBar(!showSearchBar)} 
								className='showSearchBar'>
									{showSearchBar ? 'Hide SearchBar':'Show SearchBar'}
								</button>
								{
									showSearchBar && 
									<SearchWorker
										filteredWorkers={filteredWorkers} 
										searchWorker={(event) => setSeearchField(event.target.value)}
										assignWorker={assignWorker}
										selectedWorker={selectedWorker}
										resetSearchBar={resetSearchBar}
									/>
								}
						</div>
					</div>
				</td>

			</Fragment>
		)	
					
}


export default InvoiceBoxOptions;