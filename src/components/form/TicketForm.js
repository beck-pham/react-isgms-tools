import React from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import Button from './Button';

import './form.styles.scss';

const initialState = {
  newTicket: {
    datacenter: '',
    vendor: '',
    group: '',
    hostname: '',
    system_serial: '',
    system_location: '',
    asset_tag: '',
    rfid: '',
    nagios_status: '',
    title: '',
    priority: '',
    escalate: '',
    warranty: '',
    issue: '',
    description: ''
  },

  DCLocation: ['NK', 'ST', 'PV', 'MR', 'MS', 'VP2'],
  Vendor: [
    'Netapp',
    'Isilon',
    'Avere',
    'Mapr',
    'EMC/Dell',
    'Linux/Solaris',
    'SilverPeak',
    'ZFSSA',
    'Brocade',
    'Cisco',
    'Avocent'
  ],
  Group: [
    'Icloud Mail',
    'Icloud',
    'WWW',
    'DSCE',
    'AMP',
    'Game Center',
    'SWU',
    'CSG'
  ],
  NagiosStatus: ['Staging', 'Non-Prod', 'Production', 'Lab'],
  Priority: ['P1', 'P2', 'P3'],
  Escalate: [
    'IS System Engineering SCV',
    'GIO-IS-Storage',
    'ISG Mail Storage',
    'Eng Ky',
    'Jonathan Aberle',
    'Franck Yelles'
  ],
  Warranty: ['Yes', 'No'],
  Issue: [
    'Temperature Alert',
    'GPU Failure',
    'Memory Failure',
    'OOB Network Failure',
    'Host Unreachable',
    'In band Network Failure',
    'Power Cycle Device',
    'CR Support Required',
    'Vendor Access Support',
    'Inspect Device',
    'Root Drive Failure',
    'New Build',
    'Decommission',
    'Security Vulnerability',
    'Data Drive Failure',
    'Raid Failure',
    'PXE Failure',
    'BIOS/Firmware Issue',
    'Power Supply Failure'
  ]
};
// /* FORM VALIDATION */
// const inputValidation = (fieldName, fieldValue) => {
//   if (fieldValue.trim() === '') {
//     //remove white space
//     return `${fieldName} is required`;
//   }
//   if (!/^[A-Za-z0-9.-]+$/.test(fieldValue)) {
//     return 'Invalid characters';
//   }
//   return null;
// };

// const emailValidation = email => {
//   if (
//     /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
//       email
//     )
//   ) {
//     return null;
//   }
//   if (email.trim() === '') {
//     return 'Email is required';
//   }
//   return 'Please enter a valid email';
// };

// const validate = {
//   hostname: name => inputValidation('Host Name', name),
//   system_serial: name => inputValidation('System Serial', name),
//   system_location: name => inputValidation('Host Name', name),
//   asset_tag: name => inputValidation('System Serial', name),
//   rfid: name => inputValidation('Host Name', name),
//   title: name => inputValidation('System Serial', name)
// };

export default class TicketForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleInput = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => {
        return {
          newTicket: {
            ...prevState.newTicket,
            [name]: value
          }
        };
      },
      () => console.log(this.state.newTicket)
    );
  };

  handleTextArea(e) {
    console.log('Inside handleTextArea');
    let value = e.target.value;
    this.setState(
      prevState => ({
        newTicket: {
          ...prevState.newTicket,
          description: value
        }
      }),
      () => console.log(this.state.newTicket)
    );
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newTicket: {
        datacenter: '',
        vendor: '',
        group: '',
        hostname: '',
        system_serial: '',
        system_location: '',
        asset_tag: '',
        rfid: '',
        nagios_status: '',
        title: '',
        priority: '',
        escalate: '',
        warranty: '',
        issue: '',
        description: ''
      }
    });
  }

  render() {
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <div className="left-container">
          <h1 style={{ paddingBottom: '3rem' }}>
            <i className="fa fa-ticket" aria-hidden="true"></i>
            iTicket Form
          </h1>
          <ul style={{ textAlign: 'left', color: 'black' }}>
            <li>All fields must be filled</li>
            <li>All inputs value does not allow ' and " and @</li>
          </ul>
        </div>
        <div className="right-container">
          <Select
            title={'Data Center'}
            name={'datacenter'}
            options={this.state.DCLocation}
            value={this.state.newTicket.datacenter}
            placeholder={'Select Data Center'}
            handleChange={this.handleInput}
            required
          />
          <Input
            title={'System Serial Number'}
            type={'text'}
            name={'system_serial'}
            value={this.state.newTicket.system_serial}
            placeholder={'Enter System Serial'}
            handleChange={this.handleInput}
            required
          />
          <Select
            title={'Vendor'}
            name={'vendor'}
            options={this.state.Vendor}
            value={this.state.newTicket.vendor}
            placeholder={'Select Vendor'}
            handleChange={this.handleInput}
            required
          />
          <Input
            title={'Host Name'}
            type={'text'}
            name={'hostname'}
            value={this.state.newTicket.hostname}
            placeholder={'Enter System Hostname'}
            handleChange={this.handleInput}
            required
          />
          <Select
            title={'Group'}
            name={'group'}
            options={this.state.Group}
            value={this.state.newTicket.group}
            placeholder={'Select Group'}
            handleChange={this.handleInput}
            required
          />
          <Input
            title={'System Location'}
            type={'text'}
            name={'system_location'}
            value={this.state.newTicket.system_location}
            placeholder={'Enter System Location'}
            handleChange={this.handleInput}
            required
          />
          <Select
            title={'Priority'}
            name={'priority'}
            options={this.state.Priority}
            value={this.state.newTicket.priority}
            placeholder={'Select Prority level'}
            handleChange={this.handleInput}
            required
          />
          <Input
            title={'Asset Tag'}
            type={'text'}
            name={'asset_tag'}
            value={this.state.newTicket.asset_tag}
            placeholder={'Enter System Asset Tag'}
            handleChange={this.handleInput}
            required
          />
          <Select
            title={'Escalate'}
            name={'escalate'}
            options={this.state.Escalate}
            value={this.state.newTicket.escalate}
            placeholder={'Select channel'}
            handleChange={this.handleInput}
            required
          />
          <Input
            title={'System RFID'}
            type={'text'}
            name={'rfid'}
            value={this.state.newTicket.rfid}
            placeholder={'Enter System RFID'}
            handleChange={this.handleInput}
            required
          />
          <Select
            title={'Issue'}
            name={'issue'}
            options={this.state.Issue}
            value={this.state.newTicket.issue}
            placeholder={'Select Issue'}
            handleChange={this.handleInput}
            required
          />
          <Input
            title={'Ticket Title'}
            type={'text'}
            name={'title'}
            value={this.state.newTicket.title}
            placeholder={'Enter Ticket Title'}
            handleChange={this.handleInput}
            required
          />
          <div style={{ gridColumnStart: 'span 2' }}>
            <TextArea
              title={'Description'}
              name={'description'}
              rows={10}
              cols={10}
              value={this.state.newTicket.description}
              handleChange={this.handleTextArea}
              placeholder={'iTicket template form'}
            ></TextArea>
          </div>
          <div className="button-div">
            <Button
              action={this.handleSubmit}
              type={'primary'}
              title={'Submit'}
            />{' '}
            <Button
              action={this.handleClearForm}
              type={'secondary'}
              title={'Reset'}
            />
          </div>
        </div>
      </form>
    );
  }
}
