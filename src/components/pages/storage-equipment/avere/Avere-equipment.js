import React from 'react';
import Header from '../../../header/Header';
import Footer from '../../../footer/Footer';
import ReactTable from '../../../react-table/React-table';

import { columns, data } from './avere-data';

const AvereEquipment = () => (
  <div>
    <Header />
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
    <Footer />
  </div>
);

export default AvereEquipment;
