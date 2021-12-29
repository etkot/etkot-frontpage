import React, { FC } from 'react';
import './Events.scss';

const Events: FC = () => {
  return (
    <div className='events'>
      <div className='events-body'>
        <div className='title'>
          <h1 className='title-text'>Tapahtumat</h1>
          <hr className='title-underline' />
        </div>
      </div>
    </div>
  );
};

export default Events;
