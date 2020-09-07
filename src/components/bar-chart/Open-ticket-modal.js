import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { OPEN_TICKETS } from './bar-chart.data';

class OpenTicketModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'horizontalBar',
      data: OPEN_TICKETS
    };
  }

  render() {
    return (
      <div className="horizontal-bar">
        <HorizontalBar
          data={this.state.data}
          options={{
            title: {
              display: true,
              text: 'Total Open Tickets',
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
              duration: 2000
            }
          }}
        />
      </div>
    );
  }
}

export default OpenTicketModal;
