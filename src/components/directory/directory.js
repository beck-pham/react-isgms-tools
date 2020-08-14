import React from 'react';

import MemberItem from '../member-item/member-item';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: 1,
          name: 'Eng Ky',
          title: 'Storage Manager ',
          imageUrl: require('../img/Eng.jpg')
        },
        {
          id: 2,
          name: 'Andrew Vo',
          title: 'Storage SRE',

          imageUrl: require('../img/Andrew.jpg')
        },
        {
          id: 3,
          name: 'Ly Le',
          title: 'Storage SRE',

          imageUrl: require('../img/Ly.jpg')
        },
        {
          id: 4,
          name: 'Vic Le',
          title: 'Storage SRE',
          imageUrl: require('../img/Vic.jpg')
        },
        {
          id: 5,
          name: 'Rick Phung',
          title: 'Storage SRE',
          imageUrl: require('../img/Rick.jpg')
        },
        {
          id: 6,
          name: 'Vanna Le',
          title: 'Storage SRE',
          imageUrl: require('../img/Vanna.jpg')
        },
        {
          id: 7,
          name: 'Shaun Pacada',
          title: 'Storage SRE',
          imageUrl: require('../img/Shaun.jpg')
        },
        {
          id: 8,
          name: 'Siva Yerruboyina',
          title: 'Storage SRE',
          imageUrl: require('../img/Siva.jpg')
        }
      ]
    };
  }

  render() {
    return (
      <div className="section-directory">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MemberItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
