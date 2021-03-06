import React from 'react';
import Header from '../../../header/Header';
import Footer from '../../../footer/Footer';
import ReactTable from '../../../react-table/React-table';

import { columns, data } from './mapr-data';

import './mapr-equipment.styles.scss';

const MaprEquipment = () => {
  //console.log(columns, data);
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
};
export default MaprEquipment;
