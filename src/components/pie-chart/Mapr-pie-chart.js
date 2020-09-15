import React from 'react';
import Pie from 'react-chartjs-2';

import './outerLabels';
import 'chartjs-plugin-datalabels';

class MaprPieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'pie',
      data: {
        labels: ['iCloud Mail'],
        datasets: [
          {
            data: [69],
            backgroundColor: ['#03a9f4']
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
              text: 'MapR',
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

export default MaprPieChart;
