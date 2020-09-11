import React from 'react';
import NavBar from '../../../nav/NavBar';
import Footer from '../../../footer/Footer';
import ReactTable from '../../../react-table/React-table';
import { columns, data } from './netapp-data';
import './netapp-equipment.styles.scss';

const NetappEquipment = () => (
  <div>
    <NavBar />
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
    <Footer />
  </div>
);

export default NetappEquipment;
