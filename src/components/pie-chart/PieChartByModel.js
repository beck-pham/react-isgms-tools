import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

class PieChartByModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'doughnut',
      data: {
        labels: [
          'FAS3070',
          'FAS3170',
          'FAS3220',
          'FAS6080',
          'FAS6210',
          'FAS6220',
          'FAS6240',
          'FAS6250',
          'FAS6280',
          'FAS8020',
          'FAS8040',
          'FAS8060',
          'FAS8200'
        ],
        datasets: [
          {
            data: [2, 46, 4, 4, 146, 320, 14, 4, 52, 2, 8, 10, 162],
            backgroundColor: [
              '#ffc107',
              '#2e7d32',
              '#03a9f4',
              '#ff5252',
              '#9575cd',
              '#b71c1c',
              '#78909c',
              '#1b5e20',
              '#795548',
              '#dd2c00',
              '#18ffff',
              '#6200ea',
              '#1565c0'
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
          width={450}
          height={450}
          data={this.state.data}
          options={{
            title: {
              display: true,
              text: 'Netapp Filers By System Model',
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
                padding: 10
              }
            },
            tooltips: {
              enabled: false
            },
            animation: {
              easing: 'easeInExpo',
              duration: 3000
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

export default PieChartByModel;
