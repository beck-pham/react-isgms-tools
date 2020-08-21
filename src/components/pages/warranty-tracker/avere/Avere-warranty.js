import React from 'react';

import ReactTable from '../../../react-table/React-table';

import { columns, data } from './avere-data';

//import './avere-warranty.styles.scss';

const AvereWarranty = () => (
  <div>
    <a href="/">
      <img
        src={require('../../../img/avere.jpg')}
        alt="avere_logo"
        style={{
          padding: '5px',
          width: '15rem',
          marginBottom: '5rem'
        }}
      />
    </a>
    <div className="avere-table">
      <ReactTable data={data} columns={columns} />
    </div>
  </div>
);

export default AvereWarranty;
