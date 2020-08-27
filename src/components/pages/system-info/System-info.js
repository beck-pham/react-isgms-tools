import React from 'react';

import Title from '../../title/Title';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import ReactTable from '../../react-table/React-table';

import Dashboard from '../../dashboard/Dashboard';

import { columns, data } from './system-info.data';

import './system-info.styles.scss';

const SystemInfo = () => (
  <div className="system-info">
    <Header />
    <div className="system-info-bg">
      <Title
        title="System Info"
        subtitle="Information for Infrastructure Storage System Team"
      />
    </div>
    <Dashboard />
    <div className="system-info-table">
      <ReactTable data={data} columns={columns} />
    </div>

    <Footer />
  </div>
);

export default SystemInfo;
