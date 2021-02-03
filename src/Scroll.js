import React, {Fragment} from 'react';
import './Scroll.css';

const Scroll = ({children, open, numberOfWorkers}) => {
	const scrollStyle = numberOfWorkers > 3 ? ({overflowY: 'scroll', height: '180px', overflowX: 'hidden'}):({overflowY: 'auto'});
	// console.log(scrollStyle);
	return (
		<Fragment>
			{ open && 
				<div className="workersList" style={scrollStyle}>
					{children}
				</div>
			}
		</Fragment>
	)
}


export default Scroll;