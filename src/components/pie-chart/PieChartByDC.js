import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import 'chart.js';

class PieChartByDC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'doughnut',
      data: {
        labels: ['NK', 'MR', 'ST', 'MS', 'PV'],
        datasets: [
          {
            data: [74, 218, 260, 18, 204],
            backgroundColor: [
              '#ffc107',
              '#2e7d32',
              '#03a9f4',
              '#ff5252',
              '#9575cd'
            ]
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
          height={390}
          data={this.state.data}
          options={{
            title: {
              display: true,
              text: 'Netapp Filers By DC',
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
              enabled: false
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

export default PieChartByDC;
