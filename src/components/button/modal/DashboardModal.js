import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NonDiskBarChart from '../../bar-chart/Nondisk-bar-chart';

import './dashboardModal.styles.scss';

const DashboardModal = () => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div className="modal-button-style">
      <Button variant="success" onClick={() => setLgShow(true)} size="sm">
        {/* <ion-icon name="bar-chart-outline" size="small"></ion-icon> */}
        View Details
      </Button>
      ;
      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        centered
        dialogClassName="modal-style"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <NonDiskBarChart />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DashboardModal;
