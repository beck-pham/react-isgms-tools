import React from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import Button from './Button';

import './form.styles.scss';

export default class iTicketForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleFormSubmit = e => {
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
      <form className="form-container">
        <div className="left-container">
          <h1>
            <i className="fa fa-ticket" aria-hidden="true"></i>
            iTicket Form
          </h1>
          {/* <img
            className="form-img"
            src="img/tech3.jpg"
            alt="src/components/img/technology_3"
          /> */}
        </div>
        <div className="right-container">
          <Select
            title={'Data Center'}
            name={'datacenter'}
            options={this.state.DCLocation}
            value={this.state.newTicket.datacenter}
            placeholder={'Select a Data Center'}
            handleChange={this.handleInput}
          />
          <Select
            title={'Vendor'}
            name={'vendor'}
            options={this.state.Vendor}
            value={this.state.newTicket.vendor}
            placeholder={'Select a Vendor'}
            handleChange={this.handleInput}
          />
          <Select
            title={'Group'}
            name={'group'}
            options={this.state.Group}
            value={this.state.newTicket.group}
            placeholder={'Select a Group'}
            handleChange={this.handleInput}
          />
          <Input
            title={'Host Name'}
            type={'text'}
            name={'hostname'}
            value={this.state.newTicket.hostname}
            placeholder={'Enter System Hostname'}
            handleChange={this.handleInput}
          />
          <Input
            title={'System Serial Number'}
            type={'text'}
            name={'system_serial'}
            value={this.state.newTicket.system_serial}
            placeholder={'Enter System Serial'}
            handleChange={this.handleInput}
          />
          <Input
            title={'System Location'}
            type={'text'}
            name={'system_location'}
            value={this.state.newTicket.system_location}
            placeholder={'Enter System Location'}
            handleChange={this.handleInput}
          />
          <Input
            title={'Asset Tag'}
            type={'text'}
            name={'asset_tag'}
            value={this.state.newTicket.asset_tag}
            placeholder={'Enter System Asset Tag'}
            handleChange={this.handleInput}
          />
          <Input
            title={'System RFID'}
            type={'text'}
            name={'rfid'}
            value={this.state.newTicket.rfid}
            placeholder={'Enter System RFID'}
            handleChange={this.handleInput}
          />
          <Input
            title={'Ticket Title'}
            type={'text'}
            name={'title'}
            value={this.state.newTicket.title}
            placeholder={'Enter Ticket Title'}
            handleChange={this.handleInput}
          />
          <TextArea
            title={'Description'}
            name={'description'}
            rows={10}
            cols={10}
            value={this.state.newTicket.description}
            handleChange={this.handleTextArea}
            placeholder={'iTicket template form'}
          >
            CHau Vu pHam
          </TextArea>
          <div className="button-div">
            <Button
              action={this.handleFormSubmit}
              type={'primary'}
              title={'Submit'}
            />{' '}
            <Button
              action={this.handleClearForm}
              type={'secondary'}
              title={'Clear'}
            />
          </div>
        </div>
      </form>
    );
  }
}
