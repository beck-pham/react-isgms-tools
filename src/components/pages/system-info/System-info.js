import React from 'react';

import Title from '../../title/Title';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import ReactTable from '../../react-table/React-table';
import PieChartByDC from '../../pie-chart/PieChartByDC';
import PieChartByBU from '../../pie-chart/PieChartByBU';
import PieChartByModel from '../../pie-chart/PieChartByModel';

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

    <div className="pie-chart">
      <PieChartByDC />
      <PieChartByBU />
      <PieChartByModel />
    </div>

    <div className="table">
      <ReactTable data={data} columns={columns} />
    </div>

    <Footer />
  </div>
);

export default SystemInfo;
