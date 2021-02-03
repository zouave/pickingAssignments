import React, {useState, Fragment} from 'react';
import OpenSearchBox from './OpenSearchBox';
import {workers} from './workers';
import './InvoiceBoxOptions.css';

const InvoiceBoxOptions = ({clickedSearch, selectedSearch, id}) => {
	const [searchField, setSeearchField] = useState('');
	const [showSearchBar, setShowSearchBar] = useState(false);
	let filteredWorkers = [];


	if(searchField.length > 0 ) {
		filteredWorkers = workers.filter(worker => {
			return worker.name.toLowerCase().includes(searchField.toLowerCase());
		})
	}
	
	if (selectedSearch === id) {
		return (
			<Fragment>
				<td className='flexit '>
					<button className='box border' onClick={console.log(id)}>Details</button>
				</td>
				<td><button onClick={() => setShowSearchBar(!showSearchBar)} className='showSearchBar'>Show/Hide  SearchBar</button>
					{showSearchBar && <OpenSearchBox 
					filteredWorkers={filteredWorkers} 
					searchWorker={(event) => setSeearchField(event.target.value)}
					/>}
				</td>
				<td className='border'>Placeholder</td>
				<td className='border'>Placeholder</td>
				<td className='border'>Placeholder</td>
			</Fragment>
		)	
	}
	return null;						
}


export default InvoiceBoxOptions;