import React, {Component, Fragment} from 'react';
import './Invoice.css';


import InvoiceBoxOptions from './InvoiceBoxOptions';

class Invoice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedSearch: this.props.id,
			// worker: []
		}
		this.toggleInvoiceButtons = this.toggleInvoiceButtons.bind(this);

	}

	toggleInvoiceButtons() {
		this.setState({ invoiceButtons: !this.state.invoiceButtons })

	}

	loadDetails(invoiceNumber) {
		console.log('Load details for invoice #', invoiceNumber)
	}

	onClickedSearch(value) {
		this.setState({ selectedSearch: value})
	}

	renderInvoice() {
		const {selected, passSelectedInvoice, id, company, quantity} = this.props;

		if (selected === id) {
			return (
				<Fragment>
					
						<tr className='invoiceBox' onClick={() => passSelectedInvoice(id)}>
							<td className='invoiceNumber border'>{id}</td>
							<td className='border'>{company}</td>
							<td className='border'>Selector Name</td>
							<td className='border'>Order Status</td>
							<td className='border'>{quantity}</td>
						</tr>
					
					<tr className='invoiceBox'>
						<InvoiceBoxOptions clickedSearch={this.onClickedSearch} id={id} selectedSearch={this.state.selectedSearch}/>
					</tr>
				</Fragment>
			)
		} else {
			return (
				
					<tr className='invoiceBox'  onClick={() => passSelectedInvoice(id)}>
						<td className='invoiceNumber border'>{id}</td>
						<td className='border'>{company}</td>
						<td className='border'>Selector Name</td>
						<td className='border'>Order Status</td>
						<td className='border'>{quantity}</td>
					</tr>
				
			)
		}
	}

	render() {
		return this.renderInvoice()
	}
	

}

export default Invoice;