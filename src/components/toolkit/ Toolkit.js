import React from 'react';
import { ReactComponent as ITicketIcon } from '../../icon/iticket.svg';
import { ReactComponent as CloudVaultIcon } from '../../icon/cloudvault.svg';
import { ReactComponent as AutomationIcon } from '../../icon/automation.svg';
import { ReactComponent as TimeSeriesIcon } from '../../icon/timeseries.svg';
import { ReactComponent as KnowledgeBaseIcon } from '../../icon/kb.svg';
import { ReactComponent as EquipmentIcon } from '../../icon/equipment.svg';
import { ReactComponent as SystemInfoIcon } from '../../icon/systeminfo.svg';
import { ReactComponent as InventoryIcon } from '../../icon/inventory.svg';
import { ReactComponent as TroubleshootingIcon } from '../../icon/troubleshooting.svg';
import './toolkit.styles.scss';

const ToolKit = () => (
  <section className="section-toolkit">
    <div className="card-master">
      <header className="card-header">
        <h1 className="card-master-header">
          Popular
          <br />
          Tool
          <br />
          Kits
        </h1>
      </header>

      <div className="card-author-master">
        <div className="author-name">
          <div className="author-name-prefix">Created By</div>
          <p className="prefix-p">Infrastructure Service Storage Team</p>
        </div>
      </div>
    </div>

    <div className="card-list">
      <article className="card">
        <header className="card-header">
          <p>Application</p>
          <h2>iTicket</h2>
          {/* <ul className="card-list-item">
            <li>Dashboard</li>
            <li>Breakfix</li>
            <li>Template</li>
            <li>Status</li>
            <li>Request</li>
          </ul> */}
        </header>

        <div className="card-author">
          <a className="author-avatar" href="/tool/iticket">
            <ITicketIcon height="50" width="50" />
          </a>

          <div className="author-name">
            <div className="author-name-prefix">Application</div>
          </div>
        </div>
        <div className="tags">
          <a href="#section-toolkit">html</a>
          <a href="#section-toolkit">css</a>
          <a href="#section-toolkit">javascript</a>
          <a href="#section-toolkit">react</a>
        </div>
      </article>

      <article className="card">
        <header className="card-header">
          <p>Application</p>
          <h2>CloudVault</h2>
          {/* <ul className="card-list-item">
            <li>Bucket Info</li>
            <li>Failed Upload Reports</li>
            <li>Index Database Metrics</li>
            <li>Containers Locator</li>
            <li>Application logs</li>
          </ul> */}
        </header>

        <div className="card-author">
          <a className="author-avatar" href="#section-toolkit">
            <CloudVaultIcon height="50" width="50" />
          </a>

          <div className="author-name">
            <div className="author-name-prefix">Application</div>
          </div>
        </div>
        <div className="tags">
          <a href="#section-toolkit">python</a>
          <a href="#section-toolkit">mysql</a>
        </div>
      </article>

      <article className="card">
        <header className="card-header">
          <p>Automation</p>
          <h2>Automation</h2>
          {/* <ul className="card-list-item">
            <li>Scripts</li>
            <li>Automate things</li>
            <li>Cron-jobs</li>
          </ul> */}
        </header>

        <div className="card-author">
          <a className="author-avatar" href="#section-toolkit">
            <AutomationIcon height="50" width="50" />
          </a>

          <div className="author-name">
            <div className="author-name-prefix">Automation</div>
          </div>
        </div>
        <div className="tags">
          <a href="#section-toolkit">html</a>
          <a href="#section-toolkit">css</a>
          <a href="#section-toolkit">javascript</a>
          <a href="#section-toolkit">react</a>
        </div>
      </article>

      <article className="card">
        <header className="card-header">
          <p>Application</p>
          <h2>Time Series</h2>
          {/* <ul className="card-list-item">
            <li>Real time monitoring</li>
            <li>Comprehensive metrics analytics</li>
            <li>Powerful Dashboard</li>
            <li>Storage/System/Switch Info</li>
            <li>Visualization</li>
          </ul> */}
        </header>

        <div className="card-author">
          <a className="author-avatar" href="#section-toolkit">
            <TimeSeriesIcon height="50" width="50" />
          </a>

          <div className="author-name">
            <div className="author-name-prefix">Application</div>
          </div>
        </div>
        <div className="tags">
          <a href="#section-toolkit">javascript</a>
          <a href="#section-toolkit">mysql</a>
        </div>
      </article>

      <article className="card">
        <header className="card-header">
          <p>How To</p>
          <h2>Knowledge Base</h2>
          <ul className="card-list-item">
            {/* <li>Bugzilla</li>
            <li>File a bug</li>
            <li>Query Panic Strings</li>
            <li>System logs</li> */}
          </ul>
        </header>

        <div className="card-author">
          <a className="author-avatar" href="#section-toolkit">
            <KnowledgeBaseIcon height="50" width="50" />
          </a>

          <div className="author-name">
            <div className="author-name-prefix">How To</div>
          </div>
        </div>
        <div className="tags">
          <a href="#section-toolkit">html</a>
          <a href="#section-toolkit">css</a>
          <a href="#section-toolkit">javascript</a>
          <a href="#section-toolkit">react</a>
        </div>
      </article>

      <article className="card">
        <header className="card-header">
          <p>Assets</p>
          <h2>Storage Equipment</h2>
          <ul className="card-list-item">
            {/* <li>Warranty Info</li>
            <li>Licensing</li>
            <li>Systems Expiration date</li>
            <li>Miscellanous Info</li> */}
          </ul>
        </header>

        <div className="card-author">
          <a className="author-avatar" href="#section-toolkit">
            <EquipmentIcon height="50" width="50" />
          </a>

          <div className="author-name">
            <div className="author-name-prefix">Assets</div>
          </div>
        </div>
        <div className="tags">
          <a href="#section-toolkit">html</a>
          <a href="#section-toolkit">css</a>
          <a href="#section-toolkit">javascript</a>
          <a href="#section-toolkit">react</a>
        </div>
      </article>

      <article className="card">
        <header className="card-header">
          <p>Data Analysis</p>
          <h2>System Info</h2>
          <ul className="card-list-item">
            {/* <li>Usage</li>
            <li>Availability</li>
            <li>Capacity</li>
            <li>Raw data</li> */}
          </ul>
        </header>

        <div className="card-author">
          <a className="author-avatar" href="#section-toolkit">
            <SystemInfoIcon height="50" width="50" />
          </a>

          <div className="author-name">
            <div className="author-name-prefix">Analytic</div>
          </div>
        </div>
        <div className="tags">
          <a href="#section-toolkit">javascript</a>
          <a href="#section-toolkit">css</a>
          <a href="#section-toolkit">react</a>
        </div>
      </article>

      <article className="card">
        <header className="card-header">
          <p>Assets</p>
          <h2>Inventory</h2>
          <ul className="card-list-item">
            {/* <li>FRU info</li>
            <li>Threshold</li>
            <li>Parts Quantity</li>
            <li>Par level</li> */}
          </ul>
        </header>

        <div className="card-author">
          <a className="author-avatar" href="#section-toolkit">
            <InventoryIcon height="50" width="50" />
          </a>

          <div className="author-name">
            <div className="author-name-prefix">Assets</div>
          </div>
        </div>
        <div className="tags">
          <a href="#section-toolkit">css</a>
          <a href="#section-toolkit">javascript</a>
          <a href="#section-toolkit">canvas</a>
        </div>
      </article>

      <article className="card">
        <header className="card-header">
          <p>How To</p>
          <h2>Troubleshooting</h2>
          <ul className="card-list-item">
            {/* <li>Self-Healing</li>
            <li>Volume Auto Growth</li>
            <li>Filers CRC Report</li>
            <li>System Configuration</li> */}
          </ul>
        </header>

        <div className="card-author">
          <a className="author-avatar" href="#section-toolkit">
            <TroubleshootingIcon height="50" width="50" />
          </a>

          <div className="author-name">
            <div className="author-name-prefix">How To</div>
          </div>
        </div>
        <div className="tags">
          <a href="#section-toolkit">html</a>
          <a href="#section-toolkit">css</a>
          <a href="#section-toolkit">javascript</a>
          <a href="#section-toolkit">mysql</a>
        </div>
      </article>
    </div>
  </section>
);

export default ToolKit;

// import React from 'react';

// import './toolkit.styles.scss';
// import CustomButton from '../button/Custom-button';

// const ToolKit = () => (
//   <section classNameName="section-toolkit">
//     <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
//       <h2 classNameName="heading-secondary">Our Tool Kits</h2>
//     </div>

//     <div classNameName="card-container">
//       <div classNameName="card">
//         <div classNameName="card-side card-side-front">
//           <div classNameName="card-picture card-picture-1">&nbsp;</div>
//           <h4 classNameName="card-heading">
//             <span classNameName="card-heading-span card-heading-span-1">
//               iTicket
//             </span>
//           </h4>
//           <div classNameName="card-details">
//             <ul>
//               <li>Dashboard</li>
//               <li>Breakfix</li>
//               <li>Template</li>
//               <li>Status</li>
//               <li>Request</li>
//             </ul>
//           </div>
//         </div>
//         <div classNameName="card-side card-side-back card-side-back-1">
//           <div classNameName="card-cta">
//             <p classNameName="card-paragraph">Welcome</p>
//             <a
//               href="https://google.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               classNameName="btn btn-white"
//             >
//               Sign In
//             </a>
//           </div>
//         </div>
//       </div>

//       <div classNameName="card">
//         <div classNameName="card-side card-side-front">
//           <div classNameName="card-picture card-picture-2">&nbsp;</div>
//           <h4 classNameName="card-heading">
//             <span classNameName="card-heading-span card-heading-span-2">
//               cloudvault
//             </span>
//           </h4>
//           <div classNameName="card-details">
//             <ul>
//               <li>Bucket Info</li>
//               <li>Failed Upload Reports</li>
//               <li>Index Database Metrics</li>
//               <li>Containers Locator</li>
//               <li>Application logs</li>
//             </ul>
//           </div>
//         </div>

//         <div classNameName="card-side card-side-back card-side-back-2">
//           <div classNameName="card-cta">
//             <p classNameName="card-paragraph">Welcome</p>
//             <a
//               href="https://google.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               classNameName="btn btn-white"
//             >
//               Sign In
//             </a>
//           </div>
//         </div>
//       </div>

//       <div classNameName="card">
//         <div classNameName="card-side card-side-front">
//           <div classNameName="card-picture card-picture-3">&nbsp;</div>
//           <h4 classNameName="card-heading">
//             <span classNameName="card-heading-span card-heading-span-3">
//               automation
//             </span>
//           </h4>
//           <div classNameName="card-details">
//             <ul>
//               <li>Scripts</li>
//               <li>Automate things</li>
//               <li>Cron-jobs</li>
//             </ul>
//           </div>
//         </div>

//         <div classNameName="card-side card-side-back card-side-back-3">
//           <div classNameName="card-cta">
//             <p classNameName="card-paragraph">Welcome</p>
//             <a
//               href="https://google.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               classNameName="btn btn-white"
//             >
//               Sign In
//             </a>
//           </div>
//         </div>
//       </div>

//       <div classNameName="card">
//         <div classNameName="card-side card-side-front">
//           <div classNameName="card-picture card-picture-4">&nbsp;</div>
//           <h4 classNameName="card-heading">
//             <span classNameName="card-heading-span card-heading-span-4">
//               time series
//             </span>
//           </h4>
//           <div classNameName="card-details">
//             <ul>
//               <li>Real time monitoring</li>
//               <li>Comprehensive metrics analytics</li>
//               <li>Powerful Dashboard</li>
//               <li>Storage/System/Switch Info</li>
//               <li>Visualization</li>
//             </ul>
//           </div>
//         </div>

//         <div classNameName="card-side card-side-back card-side-back-4">
//           <div classNameName="card-cta">
//             <p classNameName="card-paragraph">Welcome</p>
//             <a
//               href="https://google.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               classNameName="btn btn-white"
//             >
//               Sign In
//             </a>
//           </div>
//         </div>
//       </div>

//       <div classNameName="card">
//         <div classNameName="card-side card-side-front">
//           <div classNameName="card-picture card-picture-5">&nbsp;</div>
//           <h4 classNameName="card-heading">
//             <span classNameName="card-heading-span card-heading-span-5">
//               knowledge base
//             </span>
//           </h4>
//           <div classNameName="card-details">
//             <ul>
//               <li>Bugzilla</li>
//               <li>File a bug</li>
//               <li>Query Panic Strings</li>
//               <li>System logs</li>
//             </ul>
//           </div>
//         </div>

//         <div classNameName="card-side card-side-back card-side-back-5">
//           <div classNameName="card-cta">
//             <p classNameName="card-paragraph">Welcome</p>
//             <a
//               href="https://google.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               classNameName="btn btn-white"
//             >
//               Sign In
//             </a>
//           </div>
//         </div>
//       </div>

//       <div classNameName="card">
//         <div classNameName="card-side card-side-front">
//           <div classNameName="card-picture card-picture-6">&nbsp;</div>
//           <h4 classNameName="card-heading">
//             <span classNameName="card-heading-span card-heading-span-6">
//               warranty tracker
//             </span>
//           </h4>
//           <div classNameName="card-details">
//             <ul>
//               <li>Warranty Info</li>
//               <li>Licensing</li>
//               <li>Systems Expiration date</li>
//               <li>Miscellanous Info</li>
//             </ul>
//           </div>
//         </div>

//         <div classNameName="card-side card-side-back card-side-back-6">
//           <div classNameName="card-cta">
//             <p classNameName="card-paragraph">Welcome</p>
//             <a
//               href="https://google.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               classNameName="btn btn-white"
//             >
//               Sign In
//             </a>
//           </div>
//         </div>
//       </div>

//       <div classNameName="card">
//         <div classNameName="card-side card-side-front">
//           <div classNameName="card-picture card-picture-7">&nbsp;</div>
//           <h4 classNameName="card-heading">
//             <span classNameName="card-heading-span card-heading-span-7">
//               systems info
//             </span>
//           </h4>
//           <div classNameName="card-details">
//             <ul>
//               <li>Usage</li>
//               <li>Availability</li>
//               <li>Capacity</li>
//               <li>Raw data</li>
//             </ul>
//           </div>
//         </div>

//         <div classNameName="card-side card-side-back card-side-back-7">
//           <div classNameName="card-cta">
//             <p classNameName="card-paragraph">Welcome</p>
//             <a
//               href="https://google.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               classNameName="btn btn-white"
//             >
//               Sign In
//             </a>
//           </div>
//         </div>
//       </div>

//       <div classNameName="card">
//         <div classNameName="card-side card-side-front">
//           <div classNameName="card-picture card-picture-8">&nbsp;</div>
//           <h4 classNameName="card-heading">
//             <span classNameName="card-heading-span card-heading-span-8">
//               inventory
//             </span>
//           </h4>
//           <div classNameName="card-details">
//             <ul>
//               <li>FRU info</li>
//               <li>Threshold</li>
//               <li>Parts Quantity</li>
//               <li>Par level</li>
//             </ul>
//           </div>
//         </div>

//         <div classNameName="card-side card-side-back card-side-back-8">
//           <div classNameName="card-cta">
//             <p classNameName="card-paragraph">Welcome</p>
//             <a
//               href="https://google.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               classNameName="btn btn-white"
//             >
//               Sign In
//             </a>
//           </div>
//         </div>
//       </div>

//       <div classNameName="card">
//         <div classNameName="card-side card-side-front">
//           <div classNameName="card-picture card-picture-9">&nbsp;</div>
//           <h4 classNameName="card-heading">
//             <span classNameName="card-heading-span card-heading-span-1">
//               Trouble
//               <br />
//               Shooting
//             </span>
//           </h4>
//           <div classNameName="card-details">
//             <ul>
//               <li>Self-Healing</li>
//               <li>Volume Auto Growth</li>
//               <li>Filers CRC Report</li>
//               <li>System Configuration</li>
//             </ul>
//           </div>
//         </div>

//         <div classNameName="card-side card-side-back card-side-back-9">
//           <div classNameName="card-cta">
//             <p classNameName="card-paragraph">Welcome</p>
//             <a
//               href="https://google.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               classNameName="btn btn-white"
//             >
//               Sign In
//             </a>
//           </div>
//         </div>
//       </div>
//       <div classNameName="toolkit-button">
//         <CustomButton title="Discover Our Tools" />
//       </div>
//     </div>
//   </section>
// );

// export default ToolKit;

// import React from 'react';

// import './toolkit.styles.scss';
// import CustomButton from '../button/Custom-button';

// const ToolKit = () => (
//   <section classNameName="section-toolkit">
//     <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
//       <h2 classNameName="heading-secondary">Our Tool Kits</h2>
//     </div>

//     <div classNameName="card-container">
//       <div classNameName="card">
//         <div classNameName="card-side card-side-front">
//           <div classNameName="card-picture card-picture-1">&nbsp;</div>
//           <h4 classNameName="card-heading">
//             <span classNameName="card-heading-span card-heading-span-1">
//               iTicket
//             </span>
//           </h4>
//           <div classNameName="card-details">
//             <ul>
//               <li>Dashboard</li>
//               <li>Breakfix</li>
//               <li>Template</li>
//               <li>Status</li>
//               <li>Request</li>
//             </ul>
//           </div>
//         </div>
//         <div classNameName="card-side card-side-back card-side-back-1">
//           <div classNameName="card-cta">
//             <p classNameName="card-paragraph">Welcome</p>
//             <a
//               href="https://google.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               classNameName="btn btn-white"
//             >
//               Sign In
//             </a>
//           </div>
//         </div>
//       </div>

//       <div classNameName="card">
//         <div classNameName="card-side card-side-front">
//           <div classNameName="card-picture card-picture-2">&nbsp;</div>
//           <h4 classNameName="card-heading">
//             <span classNameName="card-heading-span card-heading-span-2">
//               cloudvault
//             </span>
//           </h4>
//           <div classNameName="card-details">
//             <ul>
//               <li>Bucket Info</li>
//               <li>Failed Upload Reports</li>
//               <li>Index Database Metrics</li>
//               <li>Containers Locator</li>
//               <li>Application logs</li>
//             </ul>
//           </div>
//         </div>

//         <div classNameName="card-side card-side-back card-side-back-2">
//           <div classNameName="card-cta">
//             <p classNameName="card-paragraph">Welcome</p>
//             <a
//               href="https://google.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               classNameName="btn btn-white"
//             >
//               Sign In
//             </a>
//           </div>
//         </div>
//       </div>

//       <div classNameName="card">
//         <div classNameName="card-side card-side-front">
//           <div classNameName="card-picture card-picture-3">&nbsp;</div>
//           <h4 classNameName="card-heading">
//             <span classNameName="card-heading-span card-heading-span-3">
//               automation
//             </span>
//           </h4>
//           <div classNameName="card-details">
//             <ul>
//               <li>Scripts</li>
//               <li>Automate things</li>
//               <li>Cron-jobs</li>
//             </ul>
//           </div>
//         </div>

//         <div classNameName="card-side card-side-back card-side-back-3">
//           <div classNameName="card-cta">
//             <p classNameName="card-paragraph">Welcome</p>
//             <a
//               href="https://google.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               classNameName="btn btn-white"
//             >
//               Sign In
//             </a>
//           </div>
//         </div>
//       </div>

//       <div classNameName="card">
//         <div classNameName="card-side card-side-front">
//           <div classNameName="card-picture card-picture-4">&nbsp;</div>
//           <h4 classNameName="card-heading">
//             <span classNameName="card-heading-span card-heading-span-4">
//               time series
//             </span>
//           </h4>
//           <div classNameName="card-details">
//             <ul>
//               <li>Real time monitoring</li>
//               <li>Comprehensive metrics analytics</li>
//               <li>Powerful Dashboard</li>
//               <li>Storage/System/Switch Info</li>
//               <li>Visualization</li>
//             </ul>
//           </div>
//         </div>

//         <div classNameName="card-side card-side-back card-side-back-4">
//           <div classNameName="card-cta">
//             <p classNameName="card-paragraph">Welcome</p>
//             <a
//               href="https://google.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               classNameName="btn btn-white"
//             >
//               Sign In
//             </a>
//           </div>
//         </div>
//       </div>

//       <div classNameName="card">
//         <div classNameName="card-side card-side-front">
//           <div classNameName="card-picture card-picture-5">&nbsp;</div>
//           <h4 classNameName="card-heading">
//             <span classNameName="card-heading-span card-heading-span-5">
//               knowledge base
//             </span>
//           </h4>
//           <div classNameName="card-details">
//             <ul>
//               <li>Bugzilla</li>
//               <li>File a bug</li>
//               <li>Query Panic Strings</li>
//               <li>System logs</li>
//             </ul>
//           </div>
//         </div>

//         <div classNameName="card-side card-side-back card-side-back-5">
//           <div classNameName="card-cta">
//             <p classNameName="card-paragraph">Welcome</p>
//             <a
//               href="https://google.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               classNameName="btn btn-white"
//             >
//               Sign In
//             </a>
//           </div>
//         </div>
//       </div>

//       <div classNameName="card">
//         <div classNameName="card-side card-side-front">
//           <div classNameName="card-picture card-picture-6">&nbsp;</div>
//           <h4 classNameName="card-heading">
//             <span classNameName="card-heading-span card-heading-span-6">
//               warranty tracker
//             </span>
//           </h4>
//           <div classNameName="card-details">
//             <ul>
//               <li>Warranty Info</li>
//               <li>Licensing</li>
//               <li>Systems Expiration date</li>
//               <li>Miscellanous Info</li>
//             </ul>
//           </div>
//         </div>

//         <div classNameName="card-side card-side-back card-side-back-6">
//           <div classNameName="card-cta">
//             <p classNameName="card-paragraph">Welcome</p>
//             <a
//               href="https://google.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               classNameName="btn btn-white"
//             >
//               Sign In
//             </a>
//           </div>
//         </div>
//       </div>

//       <div classNameName="card">
//         <div classNameName="card-side card-side-front">
//           <div classNameName="card-picture card-picture-7">&nbsp;</div>
//           <h4 classNameName="card-heading">
//             <span classNameName="card-heading-span card-heading-span-7">
//               systems info
//             </span>
//           </h4>
//           <div classNameName="card-details">
//             <ul>
//               <li>Usage</li>
//               <li>Availability</li>
//               <li>Capacity</li>
//               <li>Raw data</li>
//             </ul>
//           </div>
//         </div>

//         <div classNameName="card-side card-side-back card-side-back-7">
//           <div classNameName="card-cta">
//             <p classNameName="card-paragraph">Welcome</p>
//             <a
//               href="https://google.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               classNameName="btn btn-white"
//             >
//               Sign In
//             </a>
//           </div>
//         </div>
//       </div>

//       <div classNameName="card">
//         <div classNameName="card-side card-side-front">
//           <div classNameName="card-picture card-picture-8">&nbsp;</div>
//           <h4 classNameName="card-heading">
//             <span classNameName="card-heading-span card-heading-span-8">
//               inventory
//             </span>
//           </h4>
//           <div classNameName="card-details">
//             <ul>
//               <li>FRU info</li>
//               <li>Threshold</li>
//               <li>Parts Quantity</li>
//               <li>Par level</li>
//             </ul>
//           </div>
//         </div>

//         <div classNameName="card-side card-side-back card-side-back-8">
//           <div classNameName="card-cta">
//             <p classNameName="card-paragraph">Welcome</p>
//             <a
//               href="https://google.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               classNameName="btn btn-white"
//             >
//               Sign In
//             </a>
//           </div>
//         </div>
//       </div>

//       <div classNameName="card">
//         <div classNameName="card-side card-side-front">
//           <div classNameName="card-picture card-picture-9">&nbsp;</div>
//           <h4 classNameName="card-heading">
//             <span classNameName="card-heading-span card-heading-span-1">
//               Trouble
//               <br />
//               Shooting
//             </span>
//           </h4>
//           <div classNameName="card-details">
//             <ul>
//               <li>Self-Healing</li>
//               <li>Volume Auto Growth</li>
//               <li>Filers CRC Report</li>
//               <li>System Configuration</li>
//             </ul>
//           </div>
//         </div>

//         <div classNameName="card-side card-side-back card-side-back-9">
//           <div classNameName="card-cta">
//             <p classNameName="card-paragraph">Welcome</p>
//             <a
//               href="https://google.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               classNameName="btn btn-white"
//             >
//               Sign In
//             </a>
//           </div>
//         </div>
//       </div>
//       <div classNameName="toolkit-button">
//         <CustomButton title="Discover Our Tools" />
//       </div>
//     </div>
//   </section>
// );

// export default ToolKit;
