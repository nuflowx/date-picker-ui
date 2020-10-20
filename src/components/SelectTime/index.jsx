import React from 'react';
import { connect } from 'react-redux';

import { SET_TIME } from '../../actions/types/new-booking-action-types';
import getTimeSlots from '../../utilities/time-slot-utility'; // TODO: add aliases to not need relative paths

import TimeSlot from './TimeSlot';
import './SelectTime.scoped.scss';

function SelectTime({ dispatch, selectedTime }) {
  // TODO: need to add/pass-through selected day-value
  // to be able to disable any past time-slots
  const morningSlots = getTimeSlots(6, 15, 24);
  const afternoonSlots = getTimeSlots(12, 15, 20);
  const eveningSlots = getTimeSlots(17, 15, 20);

  const onClick = (time) => {
    dispatch({ type: SET_TIME, payload: { time } });
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
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  selectedTime: state.newBooking.time,
});

export default connect(mapStateToProps)(SelectTime);
