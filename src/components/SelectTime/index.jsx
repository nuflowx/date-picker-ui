import React from 'react';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { SET_TIME } from '../../actions/types/new-booking-action-types';
import getTimeSlots from '../../utilities/time-slot-utility'; // TODO: add aliases to not need relative paths

import TimeSlot from './TimeSlot';
import './SelectTime.scoped.scss';

dayjs.extend(customParseFormat);

function SelectTime({ dispatch, selectedDate, selectedTime }) {
  const morningSlots = getTimeSlots(6, 15, 24);
  const afternoonSlots = getTimeSlots(12, 15, 20);
  const eveningSlots = getTimeSlots(17, 15, 20);

  const onClick = (time) => {
    dispatch({ type: SET_TIME, payload: { time } });
  };

  const disabledTimeSlot = (time) => { // bit hacky, but works :)
    const isToday = dayjs(selectedDate, 'YYYY-MM-DD').isSame(dayjs(), 'day');
    const currentTimeInt = parseFloat(dayjs().format('H.mm'));
    const timeInt = parseFloat(time.replace(':', '.')); // 9.56 instead of 9:56
    const hasPast = (timeInt < currentTimeInt); // compare integer values
    return isToday && hasPast;
  };

  return (
    <div className="select-time__container">
      <div className="select-time__daytime-header">Morning</div>
      <div className="select-time__grid">
        {morningSlots.map((slot) => (
          <TimeSlot
            value={slot.value}
            key={slot.value}
            selected={slot.value === selectedTime}
            disabled={disabledTimeSlot(slot.value)}
            onClick={onClick}
          />
        ))}
      </div>
      <div className="select-time__daytime-header">Afternoon</div>
      <div className="select-time__grid">
        {afternoonSlots.map((slot) => (
          <TimeSlot
            value={slot.value}
            key={slot.value}
            selected={slot.value === selectedTime}
            disabled={disabledTimeSlot(slot.value)}
            onClick={onClick}
          />
        ))}
      </div>
      <div className="select-time__daytime-header">Evening</div>
      <div className="select-time__grid">
        {eveningSlots.map((slot) => (
          <TimeSlot
            value={slot.value}
            key={slot.value}
            selected={slot.value === selectedTime}
            disabled={disabledTimeSlot(slot.value)}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  selectedDate: state.newBooking.date,
  selectedTime: state.newBooking.time,
});

export default connect(mapStateToProps)(SelectTime);
