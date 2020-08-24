import React from 'react';

import ReactTable from '../../../react-table/React-table';
import { columns, data } from './netapp-disk.data';

import './netapp-inventory.styles.scss';

const NetappInventory = () => (
  <div>
    <a href="/">
      <img
        src={require('../../../img/netapp.jpg')}
        alt="netapp_logo"
        style={{
          padding: '5px',
          width: '15rem',
          marginBottom: '5rem'
        }}
      />
    </a>
    <div className="netapp-inventory">
      <ReactTable data={data} columns={columns} />
    </div>
  </div>
);

export default NetappInventory;
