import React, {Fragment} from 'react';
import './Scroll.css';

const Scroll = (props) => {

	return (
		<Fragment>
			{ props.open && 
				<div className="abs" style={{overflowY: 'scroll', border: '1px solid black'}}>
					{props.children}
				</div>
			}
		</Fragment>
	)
}


export default Scroll;