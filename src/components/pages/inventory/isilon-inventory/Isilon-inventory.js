import React from 'react';

import ReactTable from '../../../react-table/React-table';
import { columns, data } from './isilon-inventory.data';

import './isilon-inventory.styles.scss';

const isilonInventory = () => (
  <div>
    <a href="/">
      <img
        src={require('../../../img/isilon.jpg')}
        alt="isilon_logo"
        style={{
          padding: '5px',
          width: '15rem',
          marginBottom: '5rem'
        }}
      />
    </a>
    <div className="isilon-inventory">
      <ReactTable data={data} columns={columns} />
    </div>
  </div>
);

export default isilonInventory;
