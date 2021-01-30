import React, {useEffect, useState, useRef} from 'react';
import './Scroll.css';

const Scroll = (props) => {
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

	useEffect(() => {
		document.addEventListener('mousedown', handleClick);

		return () => {
			document.removeEventListener('mousedown', handleClick);
		}
	}, [])

	return (
		<div ref={node}>
			{ open && 
				<div className="abs" style={{overflowY: 'scroll', border: '1px solid black'}}>
					{props.children}
				</div>
			}
		</div>
	)
}


export default Scroll;