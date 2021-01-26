import React, {Component} from 'react';

class Test extends Component {
	constructor(props) {
		super(props);
		this.state = {
			testProps: 'testPropsValue'
		}
	}

	render() {
		const arg = 33;
		return (
			<div>
				<h1>Test class works, yahoooo!!</h1>
				<h1>The value of state: {this.state.testProps}</h1>
				<button onClick={() => this.props.passProps(arg)}>Print in Console log</button>
			</div>
		)
	}
	
}

export default Test;