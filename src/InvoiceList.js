import React, {Component} from 'react';
import './InvoiceList.css';
import {invoices} from './invoices';
import Invoice from './Invoice';

class InvoiceList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: null,
			searchField: '',
	
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
		return (
			<div className=''>
	
					<table>
						<thead>
							<tr>
								<th className='invoiceNumber border'>Invoice #</th>
								<th className='comapny border'>Company</th>
								<th className='worker border'>Worker</th>
								<th className='status border'>Status</th>
								<th className='quantity border'>Quantity</th>
							</tr>
						</thead>
						<tbody>
							{
							invoices.map(invoice =>
									<Invoice
										key={invoice.invoice}
										id={invoice.invoice}
										company={invoice.company}
										quantity={invoice.cases}
										selected={this.state.selected}
										passSelectedInvoice={this.selectedInvoice}
									/>
							)}
						</tbody>
					</table>
		
			</div>
		)
	}
	render() {
		return this.renderInvoiceList()		
	}
}

export default InvoiceList;