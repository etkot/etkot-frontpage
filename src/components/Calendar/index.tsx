import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import 'dayjs/locale/fi';
import localeData from 'dayjs/plugin/localeData';
import isoWeek from 'dayjs/plugin/isoWeek';
import { useCtx } from '../../context/context';
import { ReactComponent as Logo } from '../../assets/etkot.svg';
import left from '../../assets/left.png';
import right from '../../assets/right.png';
import './Calendar.scss';

const Calendar: FC = () => {
  const { setMenuOpen } = useCtx();
  dayjs.extend(localeData);
  dayjs.extend(isoWeek);
  dayjs.locale('fi');
  const today = dayjs();
  const firstOfCurrentMonth = dayjs(new Date(today.year(), today.month(), 1));
  const weekDays = ['Ma', 'Ti', 'Ke', 'To', 'Pe', 'La', 'Su'];

  const [shownMonth, setShownMonth] = useState(firstOfCurrentMonth);

  const changeMonth = (add: boolean) => {
    add ? setShownMonth(shownMonth.add(1, 'month')) : setShownMonth(shownMonth.subtract(1, 'month'));
  };

  return (
    <div className='calendar'>
      <div className='home-button' onClick={() => setMenuOpen(false)}>
        <Link to='/'>
          <Logo />
        </Link>
      </div>

      <div className='calendar-container'>
        <div className='calendar-title-row'>
          <img src={left} alt='left' className='arrow' onClick={() => changeMonth(false)} />
          <h1 className='calendar-text'>{shownMonth.format('MMMM YYYY')}</h1>
          <img src={right} alt='right' className='arrow' onClick={() => changeMonth(true)} />
        </div>

        <hr className='divider' />

        <div className='calendar-dates'>
          {/* Weekday names */}
          {weekDays.map((day) => {
            return (
              <h1 className='calendar-day calendar-date' key={day}>
                {day}
              </h1>
            );
          })}

          {/* Last month days */}
          {shownMonth.isoWeekday() <= 7
            ? [...Array(shownMonth.isoWeekday() - 1)].map((_, i) => {
                return (
                  <h1 className='calendar-date past' key={i}>
                    {shownMonth.subtract(1, 'month').daysInMonth() - shownMonth.isoWeekday() + i + 1}
                  </h1>
                );
              })
            : null}

          {/* Current month days */}
          {[...Array(shownMonth.daysInMonth())].map((_, i) => {
            return shownMonth.month() === today.month() && i + 1 === today.date() ? (
              <div className='calendar-highligth' key={i}>
                <h1 className='calendar-date today current-month'>{i + 1}</h1>
              </div>
            ) : (
              <h1 className='calendar-date current-month' key={i}>
                {i + 1}
              </h1>
            );
          })}

          {/* Next month days */}
          {shownMonth.isoWeekday() === 1 // If first day of the month is a monday
            ? [...Array(35 - shownMonth.daysInMonth())].map((_, i) => {
                return (
                  <h1 className='calendar-date past' key={i}>
                    {i + 1}
                  </h1>
                );
              })
            : shownMonth.isoWeekday() <= 7 && shownMonth.isoWeekday() + shownMonth.daysInMonth() <= 35 // I don't even know
            ? [...Array(35 - shownMonth.daysInMonth() - (shownMonth.isoWeekday() - 1))].map((_, i) => {
                return (
                  <h1 className='calendar-date past' key={i}>
                    {i + 1}
                  </h1>
                );
              })
            : shownMonth.daysInMonth() + shownMonth.isoWeekday() > 35
            ? [...Array(42 - shownMonth.daysInMonth() - (shownMonth.isoWeekday() - 1))].map((_, i) => {
                return (
                  <h1 className='calendar-date past' key={i}>
                    {i + 1}
                  </h1>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
