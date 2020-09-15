import React from 'react';
import Pie from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

class PieChartByModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'pie',
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
        <Pie
          width={400}
          height={400}
          data={this.state.data}
          options={{
            maintainAspectRatio: false,

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

export default PieChartByModel;
