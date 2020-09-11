import React from 'react';

import Title from '../../title/Title';
import NavBar from '../../nav/NavBar';
import Footer from '../../footer/Footer';
import ReactTable from '../../react-table/React-table';

import SystemDashboard from '../../dashboard/SystemDashboard';

import { columns, data } from './system-info.data';

import './system-info.styles.scss';

const SystemInfo = () => (
  <div className="system-info">
    <NavBar />
    <div className="system-info-bg">
      <Title
        title="System Information"
        subtitle="Storage Dashboard for Infrastructure Storage System Team"
      />
    </div>
    <div style={{ padding: '5rem 1rem' }}>
      <SystemDashboard />
    </div>
    <div className="system-info-table">
      <ReactTable data={data} columns={columns} />
    </div>

    <Footer />
  </div>
);

export default SystemInfo;
