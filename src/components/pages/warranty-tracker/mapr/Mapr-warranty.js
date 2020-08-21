import React from 'react';

import ReactTable from '../../../react-table/React-table';

import { columns, data } from './mapr-data';

import './mapr-warranty.styles.scss';

const MaprWarranty = () => {
  console.log(columns, data);
  return (
    <div>
      <a href="/">
        <img
          src={require('../../../img/mapr.jpg')}
          alt="mapr_logo"
          style={{
            padding: '5px',
            width: '15rem',
            marginBottom: '5rem'
          }}
        />
      </a>
      <div className="mapr-table">
        <ReactTable data={data} columns={columns} />
      </div>
    </div>
  );
};
export default MaprWarranty;
