import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useCtx } from '../../context/context';
import { ReactComponent as Logo } from '../../assets/etkot.svg';
import './Calendar.scss';

const Calendar: FC = () => {
  const { setMenuOpen } = useCtx();

  return (
    <div className='calendar'>
      <div className='home-button' onClick={() => setMenuOpen(false)}>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
    </div>
  );
};

export default Calendar;
