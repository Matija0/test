import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="#">
        Settings
      </a>
      <a className="menu-item" href="#">
        Privacy settings
      </a>
      
    </Menu>
  );
};