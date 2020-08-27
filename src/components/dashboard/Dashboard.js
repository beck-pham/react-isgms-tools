import React from 'react';

import './dashboard.styles.scss';
import CountUp from 'react-countup';

const Dashboard = () => (
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

    <div className="dashboard-container-item">
      <div className="markup-header">
        <ion-icon name="desktop-outline" size="small"></ion-icon>
        <span className="markup-span">Total Filers</span>
      </div>
      <div className="count-up">
        <CountUp end={557} duration={2.75} />
      </div>
      <div className="markup-footer">
        <ion-icon name="arrow-down-outline" size="small" color="red"></ion-icon>
        <span className="markup-span">7% from last week</span>
      </div>
    </div>

    <div className="dashboard-container-item">
      <div className="markup-header">
        <ion-icon name="desktop-outline" size="small"></ion-icon>
        <span className="markup-span">Total Disks Used</span>
      </div>
      <div className="count-up">
        <CountUp end={199158} duration={2.75} />
      </div>
      <div className="markup-footer">
        <ion-icon name="arrow-up-outline" size="small" color="red"></ion-icon>
        <span className="markup-span">15% from last week</span>
      </div>
    </div>

    <div className="dashboard-container-item">
      <div className="markup-header">
        <ion-icon name="desktop-outline" size="small"></ion-icon>
        <span className="markup-span">Total Aggr Capacity</span>
      </div>
      <div className="count-up">
        <CountUp
          end={83.84}
          duration={2.75}
          separator=" "
          decimals={2}
          decimal=","
          suffix="PB"
        />
      </div>
      <div className="markup-footer">
        <ion-icon name="arrow-up-outline" size="small" color="green"></ion-icon>
        <span className="markup-span">6% from last week</span>
      </div>
    </div>

    <div className="dashboard-container-item">
      <div className="markup-header">
        <ion-icon name="desktop-outline" size="small"></ion-icon>
        <span className="markup-span">Total Aggr Used</span>
      </div>
      <div className="count-up">
        <CountUp
          end={63.01}
          duration={2.75}
          separator=" "
          decimals={2}
          decimal=","
          suffix="PB"
        />
      </div>
      <div className="markup-footer">
        <ion-icon name="arrow-up-outline" size="small" color="green"></ion-icon>
        <span className="markup-span">12% from last week</span>
      </div>
    </div>

    <div className="dashboard-container-item">
      <div className="markup-header">
        <ion-icon name="desktop-outline" size="small"></ion-icon>
        <span className="markup-span">Total Aggr Available</span>
      </div>
      <div className="count-up">
        <CountUp
          end={20.47}
          duration={2.75}
          separator=" "
          decimals={2}
          decimal=","
          suffix="PB"
        />
      </div>
      <div className="markup-footer">
        <ion-icon
          name="arrow-down-outline"
          size="small"
          color="green"
        ></ion-icon>
        <span className="markup-span">9% from last week</span>
      </div>
    </div>
  </div>
);

export default Dashboard;
