import React, { useState } from 'react';

import { ReactComponent as NextIcon } from '../../icon/next.svg';
import { ReactComponent as SlackIcon } from '../../icon/slack.svg';
import { ReactComponent as PagerDutyIcon } from '../../icon/pagerduty.svg';
import { ReactComponent as ConfluenceIcon } from '../../icon/confluence.svg';
import { ReactComponent as EmailIcon } from '../../icon/email.svg';

import { CSSTransition } from 'react-transition-group';
import './dropdown.styles.scss';

function DropdownConnect() {
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
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
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
            leftIcon={<SlackIcon />}
            rightIcon={<NextIcon />}
            // goToMenu="settings"
          >
            <a
              href="https://app.slack.com/client/TEJ6NBG84/CHAG4R058"
              className="link-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              Slack
            </a>
          </DropdownItem>
          <DropdownItem
            leftIcon={<PagerDutyIcon />}
            rightIcon={<NextIcon />}
            // goToMenu="settings"
          >
            <a
              href="mailto:isgms-oncall@group.apple.com"
              className="link-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              PagerDuty
            </a>
          </DropdownItem>
          <DropdownItem
            leftIcon={<ConfluenceIcon />}
            rightIcon={<NextIcon />}
            // goToMenu="settings"
          >
            <a
              href="https://confluence.sd.apple.com/display/ISOSRE/Infrastructure+Services+Storage+Team"
              className="link-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              Confluence
            </a>
          </DropdownItem>
          <DropdownItem
            leftIcon={<EmailIcon />}
            rightIcon={<NextIcon />}
            // goToMenu="settings"
          >
            <a
              href="mailto:isgms@group.apple.com"
              className="link-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownConnect;
