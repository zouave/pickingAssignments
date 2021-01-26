import React from 'react';
import SearchWorker from './SearchWorker';
import {workers} from './workers';
import './InvoiceBoxOptions.css';

const InvoiceBoxOptions = ({clickedSearch, selectedSearch, id}) => {
	const [searchField, setSeearchField] = React.useState('');
	const [viewScroll, setViewScroll] = React.useState(false);
	let filteredWorkers = [];

	if(searchField.length > 0 ) {
		filteredWorkers = workers.filter(worker => {
			return worker.name.toLowerCase().includes(searchField.toLowerCase());
		})
	}
	
	if (selectedSearch === id) {
		return (
			<div>
				<button className='box' onClick={console.log(id)}>Details</button>
				<SearchWorker className='box'  filteredWorkers={filteredWorkers} searchWorker={(event) => setSeearchField(event.target.value)} />

			</div>
		)	
	}
	return null;						
}


export default InvoiceBoxOptions;