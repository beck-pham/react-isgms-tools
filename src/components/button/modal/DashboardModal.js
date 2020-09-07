import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NonDiskModal from '../../bar-chart/Nondisk-modal';
import NetappDiskModal from '../../bar-chart/Netapp-disk-modal';
import IsilonDiskModal from '../../bar-chart/Isilon-disk-modal';
import MaprDiskModal from '../../bar-chart/Mapr-disk-modal';
import OpenTicketModal from '../../bar-chart/Open-ticket-modal';
import ClosedTicketModal from '../../bar-chart/Closed-ticket-modal';

import './dashboardModal.styles.scss';

const DashboardModal = () => {
  const [lgShow1, setLgShow1] = useState(false);
  const [lgShow2, setLgShow2] = useState(false);
  const [lgShow3, setLgShow3] = useState(false);
  const [lgShow4, setLgShow4] = useState(false);
  const [lgShow5, setLgShow5] = useState(false);
  const [lgShow6, setLgShow6] = useState(false);

  return (
    <div className="modal-container">
      <div className="modal-item">
        <Button
          variant="primary"
          onClick={() => setLgShow1(true)}
          size="sm"
          style={{
            background: 'none!important',
            backgroundColor: 'rgba(0,0,0,0)',
            border: 'none',
            padding: '0!important',
            textDecoration: 'underline',
            cursor: 'pointer',
            color: '#1976d2',
            textTransform: 'capitalize'
          }}
        >
          Non-Disk Detail View
        </Button>
        <Modal
          size="xl"
          show={lgShow1}
          onHide={() => setLgShow1(false)}
          centered
          dialogClassName="modal-style"
          animation={false}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <NonDiskModal />
          </Modal.Body>
        </Modal>
      </div>

      <div className="modal-item">
        <Button
          variant="primary"
          onClick={() => setLgShow2(true)}
          size="sm"
          style={{
            background: 'none!important',
            backgroundColor: 'rgba(0,0,0,0)',
            border: 'none',
            padding: '0!important',
            textDecoration: 'underline',
            cursor: 'pointer',
            color: '#1976d2',
            textTransform: 'capitalize'
          }}
        >
          Netapp Disk Detail View
        </Button>
        <Modal
          size="xl"
          show={lgShow2}
          onHide={() => setLgShow2(false)}
          centered
          dialogClassName="modal-style"
          animation={false}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <NetappDiskModal />
          </Modal.Body>
        </Modal>
      </div>

      <div className="modal-item">
        <Button
          variant="primary"
          onClick={() => setLgShow3(true)}
          size="sm"
          style={{
            background: 'none!important',
            backgroundColor: 'rgba(0,0,0,0)',
            border: 'none',
            padding: '0!important',
            textDecoration: 'underline',
            cursor: 'pointer',
            color: '#1976d2',
            textTransform: 'capitalize'
          }}
        >
          Isilon Disk Detail View
        </Button>
        <Modal
          size="xl"
          show={lgShow3}
          onHide={() => setLgShow3(false)}
          centered
          dialogClassName="modal-style"
          animation={false}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <IsilonDiskModal />
          </Modal.Body>
        </Modal>
      </div>

      <div className="modal-item">
        <Button
          variant="primary"
          onClick={() => setLgShow4(true)}
          size="sm"
          style={{
            background: 'none!important',
            backgroundColor: 'rgba(0,0,0,0)',
            border: 'none',
            padding: '0!important',
            textDecoration: 'underline',
            cursor: 'pointer',
            color: '#1976d2',
            textTransform: 'capitalize'
          }}
        >
          Mapr Disk Detail View
        </Button>
        <Modal
          size="xl"
          show={lgShow4}
          onHide={() => setLgShow4(false)}
          centered
          dialogClassName="modal-style"
          animation={false}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <MaprDiskModal />
          </Modal.Body>
        </Modal>
      </div>

      <div className="modal-item">
        <Button
          variant="primary"
          onClick={() => setLgShow5(true)}
          size="sm"
          style={{
            background: 'none!important',
            backgroundColor: 'rgba(0,0,0,0)',
            border: 'none',
            padding: '0!important',
            textDecoration: 'underline',
            cursor: 'pointer',
            color: '#1976d2',
            textTransform: 'capitalize'
          }}
        >
          Open Tickets Detail View
        </Button>
        <Modal
          size="xl"
          show={lgShow5}
          onHide={() => setLgShow5(false)}
          centered
          dialogClassName="modal-style"
          animation={false}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <OpenTicketModal />
          </Modal.Body>
        </Modal>
      </div>

      <div className="modal-item">
        <Button
          variant="primary"
          onClick={() => setLgShow6(true)}
          size="sm"
          style={{
            background: 'none!important',
            backgroundColor: 'rgba(0,0,0,0)',
            border: 'none',
            padding: '0!important',
            textDecoration: 'underline',
            cursor: 'pointer',
            color: '#1976d2',
            textTransform: 'capitalize'
          }}
        >
          Closed Tickets Detail View
        </Button>
        <Modal
          size="xl"
          show={lgShow6}
          onHide={() => setLgShow6(false)}
          centered
          dialogClassName="modal-style"
          animation={false}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <ClosedTicketModal />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default DashboardModal;
