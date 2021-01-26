import React, {Component} from 'react';
import './App.css';
import InvoiceList from './InvoiceList';
// import Test from './Test';

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 'Picking'
    }
  }

  componentDidMount() {

  }

  testFunction(arg) {
    console.log('Can run function call back with Test class.', arg)
  }

  // <Test passProps={this.testFunction}/>
  render() {
    const { page } = this.state;

    if (page === 'Picking') {
      return (
        <div className='invoiceContainer'>
          <InvoiceList />
        </div>
      )
    } else if (page === 'Workers') {
      return 'Workers Page.'
    } else if (page === 'Settings') {
      return 'Settings Page.'
    }  else if (page === 'InvoiceDetails') {
      return 'Invoice Details Page.'
    } else {
      return 'Page value is not Picking, Workers, Settings'
    }
  }
}

export default App;
