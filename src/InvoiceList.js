import React, {Component} from 'react';
import './InvoiceList.css';
import {invoices} from './invoices';
import Invoice from './Invoice';
import {workers} from './workers';

class InvoiceList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: null,
			searchField: '',
			worker: []
		}
		//This binding is necessary to make this work in the call back
		this.selectedInvoice = this.selectedInvoice.bind(this);
		this.onSearchWorker = this.onSearchWorker.bind(this);
	}

	selectedInvoice(invoiceNumber) {
		this.setState({ selected: invoiceNumber })
	}

	onSearchWorker(event) {
		this.setState({searchField: event.target.value});
		console.log(this.state.searchField);
	}

	renderInvoiceList() {
		// const {searchField} = this.state;
		// const filteredWorkers = workers.filter(worker => {
		// 	return worker.name.toLowerCase().includes(searchField.toLowerCase());
		// })

		return (
			<div className=''>
				{
					invoices.map(invoice =>
							<Invoice
								key={invoice.invoice}
								id={invoice.invoice}
								company={invoice.company}
								quantity={invoice.cases}
								selected={this.state.selected}
								passSelectedInvoice={this.selectedInvoice}
								// filteredWorkers={filteredWorkers}
								// searchField={searchField}
								// searchWorker={this.onSearchWorker}
								// value={searchField}
							/>
					)
				}
			</div>
		)

	}
	render() {

		return this.renderInvoiceList()		
	}
	
}

export default InvoiceList;