import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './piechartexample.styles.scss';

const data = {
  labels: [
    'FAS3070',
    'FAS3170',
    'FAS3220',
    'FAS6080',
    'FAS6210',
    'FAS6220',
    'FAS6240',
    'FAS6250'
  ],
  datasets: [
    {
      data: [2, 46, 4, 4, 146, 320, 14],
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
};

class Testbox extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="box1">
          <Doughnut
            data={data}
            height={600}
            width={600}
            options={{ maintainAspectRatio: false }}
          />
        </div>
        <div className="box2">
          <Doughnut
            data={data}
            height={600}
            width={600}
            options={{ maintainAspectRatio: false }}
          />
        </div>
        <div className="box3">
          <Doughnut
            data={data}
            height={600}
            width={600}
            options={{ maintainAspectRatio: false }}
          />
        </div>
        <div className="box4">
          <Doughnut
            data={data}
            height={600}
            width={600}
            options={{ maintainAspectRatio: false }}
          />
        </div>
        <div className="box5">
          <Doughnut
            data={data}
            height={600}
            width={600}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </div>
    );
  }
}

export default Testbox;
