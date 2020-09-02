import React from 'react';
import CountUp from 'react-countup';

import './dashboard-item.styles.scss';

const DashboardItem = () => (
  <div className="dashboard-container">
    <div className="dashboard-container-item">
      <div className="markup-header">
        <ion-icon name="person-outline" size="small"></ion-icon>
        <span className="markup-span"> Total Users</span>
      </div>
      <div className="count-up">
        <CountUp
          end={2.5}
          duration={2.75}
          separator=" "
          decimals={1}
          decimal=","
          suffix="M"
        />
      </div>
      <div className="markup-footer">
        <ion-icon name="arrow-up-outline" size="small" color="green"></ion-icon>
        <span className="markup-span">34% from last week</span>
      </div>
    </div>
)


