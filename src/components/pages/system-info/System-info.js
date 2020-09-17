import React from 'react';

import Title from '../../title/Title';
import NavBar from '../../nav/NavBar';
import Footer from '../../footer/Footer';
import ReactTable from '../../react-table/React-table';

import SystemInfoDashboard from '../../dashboard/SystemInfoDashboard';

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
    <div
      style={{
        padding: '3rem',
        backgroundColor: 'rgba(236,239, 241, 0.7)'
      }}
    >
      <SystemInfoDashboard />
    </div>
    <div className="system-info-table">
      <h3 className="dashboard-heading">System Info Table</h3>
      <ReactTable data={data} columns={columns} />
    </div>
    <Footer />
  </div>
);

export default SystemInfo;
