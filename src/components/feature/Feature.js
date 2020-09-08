import React from 'react';

import './features.style.scss';

const Feature = () => (
  <section className="section-feature">
    <div className="feature-container">
      <div className="feature-container-box">
        <ion-icon name="key-outline" size="large" color="blue"></ion-icon>
        <h3 className="heading-tertinary" style={{ margin: '1.5rem' }}>
          Data Consistency
        </h3>
        <p className="paragraph">
          High Availablibty and Fault tolerance for maximum optimization and
          performance. Minimal downtime to ensure a smooth business environment.
        </p>
      </div>

      <div className="feature-container-box">
        <ion-icon size="large" name="cloud-upload-outline"></ion-icon>
        <h3 className="heading-tertinary" style={{ margin: '1.5rem' }}>
          Data Migration
        </h3>
        <p className="paragraph">
          Moving data and applications across platforms to provide faster
          performance with dynamic scaling features.
        </p>
      </div>

      <div className="feature-container-box">
        <ion-icon
          size="large"
          name="folder-outline"
          className="icon"
        ></ion-icon>
        <h3 className="heading-tertinary" style={{ margin: '1.5rem' }}>
          Data organzation management
        </h3>
        <p className="paragraph">
          Organize the data in user and system files and volumes for both SAN
          and NAS environment.
        </p>
      </div>

      <div className="feature-container-box">
        <ion-icon
          size="large"
          name="construct-outline"
          className="icon"
        ></ion-icon>
        <h3 className="heading-tertinary" style={{ margin: '1.5rem' }}>
          Data Protection Capabilities
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
