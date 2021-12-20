import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useCtx } from '../../context/context';
import { ReactComponent as Logo } from '../../assets/etkot.svg';
import './Gallery.scss';

const Gallery: FC = () => {
  const { setMenuOpen } = useCtx();

  return (
    <div className='gallery'>
      <div className='home-button' onClick={() => setMenuOpen(false)}>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
