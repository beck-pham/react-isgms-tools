import React from 'react';

import ReactTable from '../../../react-table/React-table';

import { columns, data } from './silverpeak-data';

import './silverpeak-equipment.styles.scss';

const SilverPeakEquipment = () => (
  <div>
    <a href="/">
      <img
        src={require('../../../img/silverpeak.jpg')}
        alt="silverpeak_logo"
        style={{
          padding: '5px',
          width: '15rem',
          marginBottom: '5rem'
        }}
      />
    </a>
    <div className="silverpeak-table">
      <ReactTable data={data} columns={columns} />
    </div>
  </div>
);

export default SilverPeakEquipment;
