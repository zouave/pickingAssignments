import React, {useState, useRef, useEffect} from 'react';
import './SearchWorker.css';
import Scroll from './Scroll';
import WorkerList from './WorkerList';

const SearchWorker = ({searchWorker, filteredWorkers, assignWorker, resetSearchField}) => {
	const [open, setOpen] = useState(true);
	const node = useRef();

	const handleClick = e => {
		if (node.current.contains(e.target)) {
			//inside click
			resetInputBoxValue();
			return;
		}
		//outside click
		resetInputBoxValue();
		setOpen(false);
	}

	const handleOpen = () => {
		if(!open) {
			resetSearchField();
			setOpen(!open)
			return;
		}
		resetSearchField();
		return;
	}

	const workerSelected = () => {
		setOpen(!open)
	}

	const resetInputBoxValue = () => {
		document.getElementById('inputBox').value = '';
	}
	useEffect(() => {
		document.addEventListener('mousedown', handleClick);

		return () => {
			document.removeEventListener('mousedown', handleClick);
		}
	}, [])



	function inputBox() {
		return (
			<input
				id='inputBox'
				className=' searchBar pa3  ba b--green bg-lightest-blue'
				type='search' 
				placeholder="Selector's name"
				autoComplete='off'
				onChange={searchWorker}
				onClick={handleOpen}
			/>
		)
		
		
	}
	

	if(filteredWorkers.length)
		return (
			<div ref={node} className='father'>
				{ inputBox() }
				<Scroll open={open} numberOfWorkers={filteredWorkers.length} className='son'>
					<WorkerList 
						resetSearchField={resetSearchField}
						workerSelected={workerSelected} 
						assignWorker={assignWorker} 
						workers={filteredWorkers}
					/>
				</Scroll>
			</div>
		)

		return (
			<div ref={node} className='father'>
				{ inputBox() }
			</div>
		)

}

export default SearchWorker;