import React from 'react';
import { ReactComponent as Feature1Icon } from '../../icon/feature-1.svg';
import { ReactComponent as Feature2Icon } from '../../icon/feature-2.svg';
import { ReactComponent as Feature3Icon } from '../../icon/feature-3.svg';
import { ReactComponent as Feature4Icon } from '../../icon/feature-4.svg';

import './features.style.scss';

const Feature = () => (
  <section className="section-feature">
    <div className="feature-container">
      <div className="feature-container-box">
        <Feature1Icon height="50" width="50" />
        <h3 className="heading-tertinary" style={{ margin: '1.5rem' }}>
          Data Consistency
        </h3>
        <p className="paragraph">
          High Availablibty and Fault tolerance for maximum optimization and
          performance. Minimal downtime to ensure a smooth business environment.
        </p>
      </div>

      <div className="feature-container-box">
        <Feature2Icon height="50" width="50" />
        <h3 className="heading-tertinary" style={{ margin: '1.5rem' }}>
          Data Migration
        </h3>
        <p className="paragraph">
          Moving data and applications across platforms to provide faster
          performance with dynamic scaling features.
        </p>
      </div>

      <div className="feature-container-box">
        <Feature3Icon height="50" width="50" />
        <h3 className="heading-tertinary" style={{ margin: '1.5rem' }}>
          Data Management
        </h3>
        <p className="paragraph">
          Organize the data in user and system files and volumes for both SAN
          and NAS environment.
        </p>
      </div>

      <div className="feature-container-box">
        <Feature4Icon height="50" width="50" />
        <h3 className="heading-tertinary" style={{ margin: '1.5rem' }}>
          Data Protection
        </h3>
        <p className="paragraph">
          Provides a wide range of data protection using techonology such as
          SnapMirror, Snapshot, SnapRestore, SyncMirror, etc.
        </p>
      </div>
    </div>
  </section>
);
export default Feature;
