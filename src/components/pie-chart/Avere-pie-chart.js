import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import './outerLabels';
import 'chartjs-plugin-datalabels';

class AverePieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'doughnut',
      data: {
        labels: ['AMP'],
        datasets: [
          {
            data: [170],
            backgroundColor: ['#ffc107']
          }
        ]
      }
    };
  }

  render() {
    return (
      <div className="pie-chart">
        <Doughnut
          width={400}
          height={400}
          data={this.state.data}
          options={{
            maintainAspectRatio: false,

            title: {
              display: true,
              text: 'Avere',
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
            cutoutPercentage: 70,
            responsive: true,
            elements: {
              arc: {
                borderWidth: 5
              }
            }
          }}
        />
      </div>
    );
  }
}

export default AverePieChart;
