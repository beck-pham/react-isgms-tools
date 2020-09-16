import React, { useState } from 'react';

import { ReactComponent as NextIcon } from '../../icon/next.svg';
import { ReactComponent as ITicketIcon } from '../../icon/iticket.svg';
import { ReactComponent as CloudVaultIcon } from '../../icon/cloudvault.svg';
import { ReactComponent as AutomationIcon } from '../../icon/automation.svg';
import { ReactComponent as TimeSeriesIcon } from '../../icon/timeseries.svg';
import { ReactComponent as KnowledgeBaseIcon } from '../../icon/kb.svg';
import { ReactComponent as EquipmentIcon } from '../../icon/equipment.svg';
import { ReactComponent as SystemInfoIcon } from '../../icon/systeminfo.svg';
import { ReactComponent as InventoryIcon } from '../../icon/inventory.svg';
import { ReactComponent as TroubleshootingIcon } from '../../icon/troubleshooting.svg';
//import { ReactComponent as ChevronIcon } from '../../icon/next.svg';
import { CSSTransition } from 'react-transition-group';
import './dropdown.styles.scss';

function DropdownTool() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      // eslint-disable-next-line
      <a
        href="#"
        className="dropdown-item"
        onClick={() => setActiveMenu}
        // onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<ITicketIcon />}
            rightIcon={<NextIcon />}
            // goToMenu="settings"
          >
            <a
              href="/tool/iticket"
              className="link-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              iTicket
            </a>
          </DropdownItem>
          <DropdownItem
            leftIcon={<CloudVaultIcon />}
            rightIcon={<NextIcon />}
            // goToMenu="settings"
          >
            <a
              href="/tool/cloudvault"
              className="link-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cloudvault
            </a>
          </DropdownItem>
          <DropdownItem
            leftIcon={<AutomationIcon />}
            rightIcon={<NextIcon />}
            // goToMenu="settings"
          >
            <a
              href="https://st11p00im-storagedbm.storage.me.com/installation/enter.php"
              className="link-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              Automation
            </a>
          </DropdownItem>
          <DropdownItem
            leftIcon={<TimeSeriesIcon />}
            rightIcon={<NextIcon />}
            // goToMenu="settings"
          >
            <a
              href="/tool/time_series"
              className="link-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              Time Series
            </a>
          </DropdownItem>
          <DropdownItem
            leftIcon={<KnowledgeBaseIcon />}
            rightIcon={<NextIcon />}
            // goToMenu="settings"
          >
            <a
              href="/tool/knowledge_base"
              className="link-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              Knowledge Base
            </a>
          </DropdownItem>
          <DropdownItem
            leftIcon={<EquipmentIcon />}
            rightIcon={<NextIcon />}
            // goToMenu="settings"
          >
            <a
              href="/tool/storage_equipment"
              className="link-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              Storage Equipment
            </a>
          </DropdownItem>
          <DropdownItem
            leftIcon={<SystemInfoIcon />}
            rightIcon={<NextIcon />}
            // goToMenu="settings"
          >
            <a
              href="/tool/system_info"
              className="link-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              System Info
            </a>
          </DropdownItem>
          <DropdownItem
            leftIcon={<InventoryIcon />}
            rightIcon={<NextIcon />}
            // goToMenu="settings"
          >
            <a
              href="/tool/inventory"
              className="link-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              inventory
            </a>
          </DropdownItem>
          <DropdownItem
            leftIcon={<TroubleshootingIcon />}
            rightIcon={<NextIcon />}
            // goToMenu="settings"
          >
            <a
              href="https://st11p00im-storagedbm.storage.me.com/troubleshooting/enter.php"
              className="link-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              Troubleshooting
            </a>
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownTool;
