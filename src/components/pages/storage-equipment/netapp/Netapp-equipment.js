import React from 'react';

import ReactTable from '../../../react-table/React-table';
import { columns, data } from './netapp-data';
import './netapp-equipment.styles.scss';

const NetappEquipment = () => (
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
    <div className="netapp-warranty">
      <ReactTable data={data} columns={columns} />
    </div>
  </div>
);

export default NetappEquipment;
