import React, { FC } from 'react';
import { ReactComponent as Logo } from '../../assets/etkot.svg';
import './Main.scss';

const Main: FC = () => {
  return (
    <div className='main'>
      <div className='logo-container'>
        <Logo />
        <div className='text-container'>
          <h1 className='logo-text'>FRONTPAGE</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
