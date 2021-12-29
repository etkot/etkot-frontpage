import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useCtx } from '../../context/context';
import { ReactComponent as MenuIcon } from '../../assets/burgerMenu.svg';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import './Menu.scss';

const Menu: FC = () => {
  const { menuOpen, setMenuOpen } = useCtx();
  return (
    <div className='menu'>
      <div className='menu-button' onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <CloseIcon className='menu-icon-close' /> : <MenuIcon className='menu-icon-open' />}
      </div>

      <div className={`menu-body  ${menuOpen ? 'menu-body-open' : 'menu-body-closed'}`}>
        <div className='menu-content'>
          <h1 className='headline'>Login</h1>
          <Link className='link' to='/gallery' onClick={() => setMenuOpen(false)}>
            <h1 className='headline'>Gallery</h1>
          </Link>
          <Link className='link' to='/calendar' onClick={() => setMenuOpen(false)}>
            <h1 className='headline'>Calendar</h1>
          </Link>
          <Link className='link' to='about' onClick={() => setMenuOpen(false)}>
            <h1 className='headline'>About</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
