import React, {Component, Fragment} from 'react';
import './Invoice.css';
// import {workers} from './workers';
import WorkerList from './WorkerList';
import SearchWorker from './SearchWorker';

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
		const {selected, passSelectedInvoice, id, company, quantity, filteredWorkers, searchField, searchWorker, value} = this.props;

		if (selected === id) {
			return (
				<Fragment>
					<div className='invoiceBox'>
						<h1 onClick={() => passSelectedInvoice(id)}>Invoice: {id}. Company: {company}. Cases: {quantity}</h1>
					</div>
					<div className='invoiceBox1'>
						<InvoiceBoxOptions clickedSearch={this.onClickedSearch} id={id} selectedSearch={this.state.selectedSearch}/>
					</div>
				</Fragment>
			)
		} else {
			return (
				<div className='invoiceBox'>
					<h1 onClick={() => passSelectedInvoice(id)}>Invoice: {id}. Company: {company}. Cases: {quantity}</h1>
				</div>
			)
		}
	}

	render() {
		return this.renderInvoice()
	}
	

}

export default Invoice;