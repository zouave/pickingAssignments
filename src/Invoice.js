import React, {Component, Fragment} from 'react';
import './Invoice.css';


import InvoiceBoxOptions from './InvoiceBoxOptions';

class Invoice extends Component {

	constructor(props) {
		super(props);
		this.state = {
			worker: []
		}
		this.toggleInvoiceButtons = this.toggleInvoiceButtons.bind(this);
		this.assignWorker = this.assignWorker.bind(this);
	}

	toggleInvoiceButtons() {
		this.setState({ invoiceButtons: !this.state.invoiceButtons })

	}

	loadDetails(invoiceNumber) {
		console.log('Load details for invoice #', invoiceNumber)
	}


	assignWorker(name) {
		this.setState({worker: name})
	}

	invoiceDetails(passSelectedInvoice, id, company, quantity, worker, selected) {
		const highlight = (selected === id) ?
			{backgroundColor: '#faebc0'}:
			{backgroundColor: ''}

		return <tr style={highlight} className='invoiceBox' onClick={() => passSelectedInvoice(id)}>
					<td className='invoiceNumber border'>{id}</td>
					<td className='border'>{company}</td>
					<td className='border'>{worker}</td>
					<td className='border'>Order Status</td>
					<td className='border'>{quantity}</td>
				</tr>
	}

	renderInvoice() {
		const {selected, passSelectedInvoice, id, company, quantity, resetSearchBar} = this.props;
		const {worker} = this.state;
		if (selected === id) {
			return (
				<Fragment>
					{this.invoiceDetails(passSelectedInvoice, id, company, quantity, worker, selected)}
					<tr className='invoiceBox highlight'>
						<InvoiceBoxOptions 
							selectedWorker={worker} 
							assignWorker={this.assignWorker} 
							clickedSearch={this.onClickedSearch} 
							id={id} 
							resetSearchBar={resetSearchBar}
						/>
					</tr>
				</Fragment>
			)
		} else {
			return this.invoiceDetails(passSelectedInvoice, id, company, quantity, worker, selected)
		}
	}

	render() {
		return this.renderInvoice()
	}
	

}

export default Invoice;