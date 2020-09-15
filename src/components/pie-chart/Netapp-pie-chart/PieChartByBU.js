import React from 'react';
import Pie from 'react-chartjs-2';

import '../outerLabels';
import 'chartjs-plugin-datalabels';
import 'chart.js';

class PieChartByBU extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'pie',
      data: {
        labels: ['AMP', 'iCloud Mail', 'Game Center', 'WWW', 'DSCE', 'SWU'],
        datasets: [
          {
            data: [74, 660, 4, 4, 20, 12],
            backgroundColor: [
              '#ffc107',
              '#2e7d32',
              '#03a9f4',
              '#ff5252',
              '#9575cd',
              '#b71c1c'
            ]
          }
        ]
      }
    };
  }

  render() {
    return (
      <div className="pie-chart">
        <Pie
          width={400}
          height={400}
          data={this.state.data}
          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: 'Netapp Filers By Business Unit',
              position: 'top',
              fontSize: 20,
              fontColor: '#111',
              padding: 20
            },
            legend: {
              display: true,
              position: 'bottom',
              labels: {
                boxWidth: 20,
                fontColor: '#111',
                padding: 15
              }
            },
            tooltips: {
              enabled: true
            },
            animation: {
              easing: 'easeInExpo',
              duration: 2750
            },
            plugins: {
              datalabels: false
            },
            cutoutPercentage: 0
          }}
        />
      </div>
    );
  }
}

export default PieChartByBU;
