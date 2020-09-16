import React, { useState, useRef, useEffect } from 'react';
import './navitem.styles.scss';

const NavItem = props => {
  // call the useStat function and it returns 2 value in an array so that they can be destructuring as bracket
  // 1st value is the state of a boolean value whether the dropdown menu is open
  // 2nd value is a function to use to change the state
  const node = useRef();
  const [open, setOpen] = useState(false);

  const handleClickOutside = e => {
    console.log('clicking anywhere');
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <li className="nav-item" ref={node}>
      {/* eslint-disable-next-line */}
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
        {props.onClick}
      </a>
      <h4 className="icon-title">{props.title}</h4>
      {/* <h6 className="icon-title">{props.title}</h6> */}
      {/* when the dropdown state is true, open the dropdown menu */}
      {open && props.children}
    </li>
  );
};

export default NavItem;
