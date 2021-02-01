import React, {useState, Fragment} from 'react';
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
			<Fragment>
			<td className='flexit border'>
				<button className='box border' onClick={console.log(id)}>Details</button>
			</td>
			<td className='father'>
				<OpenSearchBox 
				className='son'
				filteredWorkers={filteredWorkers} 
				searchWorker={(event) => setSeearchField(event.target.value)}
				/>
			</td>
			<td className='border'>a</td>
			<td className='border'>v</td>
			<td className='border'>c</td>
			</Fragment>
		)	
	}
	return null;						
}


export default InvoiceBoxOptions;