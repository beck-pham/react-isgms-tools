import React from 'react';

import ReactTable from '../../../react-table/React-table';

import { columns, data } from './isilon-data';

import './isilon-equipment.styles.scss';

const IsilonEquipment = () => (
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
    <div className="isilon-table">
      <ReactTable data={data} columns={columns} />
    </div>
  </div>
);

export default IsilonEquipment;
