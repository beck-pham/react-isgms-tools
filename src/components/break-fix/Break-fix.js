import React from 'react';
import Title from '../../title/Title';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import ReactTable from '../../react-table/React-table';

import { columns, data } from './system-info.data';

import './break-fix.styles.scss';

const Breakfix = () => (
  <div>
    <Header />
    <div>
      <Title 
        title="Break-fix page"
      />
    </div>
    <div className="system-info-table">
      <ReactTable data={data} columns={columns} />
    </div>

    <Footer />
  </div>
)