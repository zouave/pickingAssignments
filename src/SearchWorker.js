import React, {useState, useRef, useEffect} from 'react';
import './SearchWorker.css';
import Scroll from './Scroll';
import WorkerList from './WorkerList';

const SearchWorker = ({searchWorker, filteredWorkers}) => {
	const [open, setOpen] = useState(true);
	const node = useRef();

	const handleClick = e => {
		if (node.current.contains(e.target)) {
			//inside click
			return;
		}
		//outside click
		setOpen(false);
		console.log('Clicked outside the node');

	}

	const handleOpen = () => {
		if(!open) {
			setOpen(!open)
			return;
		}
		return;
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
				className=' searchBar pa3  ba b--green bg-lightest-blue'
				type='search' 
				placeholder="Selector's name"
				onChange={searchWorker}
				onClick={handleOpen}
			/>
		)
	}
	

	if(filteredWorkers.length > 0 )
		return (
			<div ref={node} className='father'>
				{ inputBox() }
				<Scroll open={open} numberOfWorkers={filteredWorkers.length} className='son'>
					<WorkerList workers={filteredWorkers}/>
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