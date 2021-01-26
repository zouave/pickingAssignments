import React from 'react';
import './Picking.css';
import {invoices} from '../containers/invoices';

const PickingTable = (invoices, config = {key:'company', direction:'ascending'}) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...invoices];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [invoices, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  // console.log(sortedItems, 'sortedItems');
  // console.log(requestSort, 'requestSort');
  // console.log(sortConfig, 'sortConfig');

  return { invoices: sortedItems, requestSort, sortConfig };
};

const InvoiceTable = (props) => {
  const { invoices, requestSort, sortConfig } = PickingTable(props.invoices);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };


  return (
    <table>
      <caption><h1 className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>Picking Screen</h1></caption>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('invoice')}
              className={getClassNamesFor('invoice')}
            >
              Invoice
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('company')}
              className={getClassNamesFor('company')}
            >
              Company
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('status')}
              className={getClassNamesFor('status')}
            >
              Status
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('picker')}
              className={getClassNamesFor('picker')}
            >
              Picker
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('duration')}
              className={getClassNamesFor('duration')}
            >
              Duration
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((invoice) => (
          <tr key={invoice.invoice} onClick={showHideDetails}>
            <td>
              {invoice.invoice}
              <div>
                <button className='tc bg-light-blue dib br3 pa1 ma3 grow bw2 shadow-5' value='details'>Details</button>
              </div>
            </td>
            <td>{invoice.company}</td>
            <td>{invoice.status}</td>
            <td>
              <input type="search" className='tc bg-green dib br3 pa1 ma1 bw2 shadow-5'/>{invoice.picker}
              <div>
                <button className='tc bg-light-green dib br3 pa1 ma1 grow bw2 shadow-5' value='add'>Add</button>
                <button className='tc bg-light-red dib br3 pa1 ma1 grow bw2 shadow-5' value='cancel'>Cancel</button>
                <button className='tc bg-green dib br3 pa1 ma1 grow bw2 shadow-5' value='completed'>Completed</button>
              </div>
            </td>
            <td>{invoice.duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function Picking() {
  return <InvoiceTable invoices={invoices} />
}
