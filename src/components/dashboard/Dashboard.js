import React from 'react';

import './dashboard.styles.scss';
import CountUp from 'react-countup';

const Dashboard = () => (
  <div className="dashboard-container">
    <div className="dashboard-container-item">
      <div className="markup">
        <ion-icon name="desktop-outline" size="small" color="blue"></ion-icon>
        <span>Total Filers</span>
      </div>
      <div className="count-up">
        <CountUp start={0} end={557} duration={2.75} />
      </div>
      <div className="markup">
        <ion-icon name="arrow-down-outline"></ion-icon>
        <span>15% from last week</span>
      </div>
    </div>

    <div className="dashboard-container-item">
      <h6>Total Filers</h6>
    </div>
    <div className="dashboard-container-item">
      <h6>Total Filers</h6>
    </div>
    <div className="dashboard-container-item">
      <h6>Total Filers</h6>
    </div>
    <div className="dashboard-container-item">
      <h6>Total Filers</h6>
    </div>
    <div className="dashboard-container-item">
      <h6>Total Filers</h6>
    </div>
  </div>
);

export default Dashboard;
