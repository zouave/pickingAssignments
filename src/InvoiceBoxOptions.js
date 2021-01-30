import React, {useState} from 'react';
import OpenSearchBox from './OpenSearchBox';
import {workers} from './workers';
import './InvoiceBoxOptions.css';

const InvoiceBoxOptions = ({clickedSearch, selectedSearch, id}) => {
	const [searchField, setSeearchField] = useState('');
	let filteredWorkers = [];

	if(searchField.length > 0 ) {
		filteredWorkers = workers.filter(worker => {
			return worker.name.toLowerCase().includes(searchField.toLowerCase());
		})
	}
	
	if (selectedSearch === id) {
		return (
			<div className='flexit'>
				<button className='box' onClick={console.log(id)}>Details</button>

				<div className='father'>
					<OpenSearchBox 
					className='box1'
					filteredWorkers={filteredWorkers} 
					searchWorker={(event) => setSeearchField(event.target.value)}
					/>
				</div>
			</div>
		)	
	}
	return null;						
}


export default InvoiceBoxOptions;