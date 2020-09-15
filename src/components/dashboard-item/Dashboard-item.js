import React from 'react';
import { ReactComponent as MonitorIcon } from '../../icon/monitor.svg';
import { ReactComponent as UpArrowIcon } from '../../icon/up_arrow.svg';
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
  <div>
    <div className="dashboard-container-item">
      <div className="markup-header">
        <MonitorIcon height={30} width={30} style={{ marginRight: '5px' }} />
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
        <UpArrowIcon height={30} width={30} style={{ marginRight: '5px' }} />
        <span className="markup-span">{subtitle}</span>
      </div>
    </div>
  </div>
);

export default DashboardItem;
