import React from 'react';
import Header from '../../../header/Header';
import Footer from '../../../footer/Footer';
import ReactTable from '../../../react-table/React-table';

import { columns, data } from './silverpeak-data';

import './silverpeak-equipment.styles.scss';

const SilverPeakEquipment = () => (
  <div>
    <Header />
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
    <Footer />
  </div>
);

export default SilverPeakEquipment;
