import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
	return (
		<div className="abs" style={{overflowY: 'scroll', border: '3px solid black', height: '70px'}}>
			{props.children}
		</div>
	)
}


export default Scroll;