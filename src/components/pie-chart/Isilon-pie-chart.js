import React from 'react';
import Pie from 'react-chartjs-2';

import './outerLabels';
import 'chartjs-plugin-datalabels';

class IsilonPieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'pie',
      data: {
        labels: ['DSCE', 'AMP', 'Game Center', 'DMZ', 'QA'],
        datasets: [
          {
            data: [48, 154, 36, 60, 15],
            backgroundColor: [
              '#9575cd',
              '#ffc107',
              '#03a9f4',
              '#b71c1c',
              '#ff5252'
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
              text: 'Isilon',
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

export default IsilonPieChart;
