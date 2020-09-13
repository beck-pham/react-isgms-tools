import React from 'react';
import NavItem from '../nav-item/NavItem';
import DropdownTool from '../dropdown/Dropdown-tool';
import DropdownConnect from '../dropdown/Dropdown-connect';
import { ReactComponent as ToolIcon } from '../../icon/tools.svg';
import { ReactComponent as ConnectIcon } from '../../icon/connect.svg';
import { ReactComponent as HomeIcon } from '../../icon/home.svg';
import { ReactComponent as SignInIcon } from '../../icon/signin.svg';

import './navbar.styles.scss';

const NavBar = () => (
  <nav className="nav-bar">
    <ul className="nav-list">
      <NavItem icon={<HomeIcon />} title="Home"></NavItem>
      <NavItem icon={<ToolIcon />} title="Tools">
        <DropdownTool />
      </NavItem>
      <NavItem icon={<ConnectIcon />} title="Connect">
        <DropdownConnect />
      </NavItem>
      <NavItem icon={<SignInIcon />} title="Sign In" />
    </ul>
  </nav>
);

export default NavBar;
