import React from 'react';
import CountUp from 'react-countup';

import './dashboard-item.styles.scss';

const DashboardItem = ({
  title,
  subtitle,
  end,
  duration,
  separator,
  decimals,
  decimal,
  suffix
}) => (
  <div className="dashboard-container">
    <div className="dashboard-container-item">
      <div className="markup-header">
        <ion-icon name="desktop-outline" size="small"></ion-icon>
        <span className="markup-span">{title}</span>
      </div>
      <div className="count-up">
        <CountUp
          end={end}
          duration={duration}
          separator={separator}
          decimals={decimals}
          decimal={decimal}
          suffix={suffix}
        />
      </div>
      <div className="markup-footer">
        <ion-icon name="arrow-up-outline" size="small" color="green"></ion-icon>
        <span className="markup-span">{subtitle}</span>
      </div>
    </div>
  </div>
);

export default DashboardItem;
