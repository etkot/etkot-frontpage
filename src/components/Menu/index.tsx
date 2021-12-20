import React, { FC, useState } from 'react';
import { ReactComponent as MenuIcon } from '../../assets/burgerMenu.svg';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import './Menu.scss';

const Menu: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
      <div className='menu-button'>
        <MenuIcon className='menu-icon-open' />
        <CloseIcon className='menu-icon-close' />
      </div>
      <div className={`menu-body  ${menuOpen ? 'menu-body-open' : 'menu-body-closed'}`}>
        <div className='menu-content'>
          <h1 className='headline'>Login</h1>
          <h1 className='headline'>Gallery</h1>
          <h1 className='headline'>Calendar</h1>
          <h1 className='headline'>About</h1>
        </div>
      </div>
    </div>
  );
};

export default Menu;
