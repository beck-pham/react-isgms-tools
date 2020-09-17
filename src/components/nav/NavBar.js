import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../nav-item/NavItem';
import DropdownTool from '../dropdown/Dropdown-tool';
import DropdownConnect from '../dropdown/Dropdown-connect';
import { ReactComponent as ToolIcon } from '../../icon/tools.svg';
import { ReactComponent as ConnectIcon } from '../../icon/connect.svg';
import { ReactComponent as HomeIcon } from '../../icon/home.svg';
import { ReactComponent as SignInIcon } from '../../icon/signin.svg';

import './navbar.styles.scss';
const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    //console.log(window.scrollY);
    if (window.scrollY >= 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);
  return (
    <>
      <div className="intro-logo-box">
        <img
          src={require('../img/logo.jpg')}
          alt="Full Logo"
          className="intro-logo"
        />
      </div>
      <nav className={navbar ? 'nav-bar scroll' : 'nav-bar'}>
        <ul className="nav-list">
          <Link to="/">
            <NavItem icon={<HomeIcon />} title="Home"></NavItem>
          </Link>
          <NavItem icon={<ToolIcon />} title="Tools">
            <DropdownTool />
          </NavItem>
          <NavItem icon={<ConnectIcon />} title="Connect">
            <DropdownConnect />
          </NavItem>
          <NavItem icon={<SignInIcon />} title="Sign In" />
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
