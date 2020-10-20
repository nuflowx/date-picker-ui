import React from 'react';

import getTimeSlots from '../../utilities/time-slot-utility'; // TODO: add aliases to not need relative paths

import TimeSlot from './TimeSlot';
import './SelectTime.scoped.scss';

function SelectTime() {
  // TODO: need to add/pass-through selected day-value
  // to be able to disable any past time-slots
  const morningSlots = getTimeSlots(6, 15, 24);
  const afternoonSlots = getTimeSlots(12, 15, 20);
  const eveningSlots = getTimeSlots(17, 15, 20);

  return (
    <div className="select-time__container">
      <div className="select-time__daytime-header">Morning</div>
      <div className="select-time__grid">
        {morningSlots.map((slot) => (
          <TimeSlot value={slot.value} key={slot.value} /> // TODO: add disabled, selected & onClick
        ))}
      </div>
      <div className="select-time__daytime-header">Afternoon</div>
      <div className="select-time__grid">
        {afternoonSlots.map((slot) => (
          <TimeSlot value={slot.value} key={slot.value} />
        ))}
      </div>
      <div className="select-time__daytime-header">Evening</div>
      <div className="select-time__grid">
        {eveningSlots.map((slot) => (
          <TimeSlot value={slot.value} key={slot.value} />
        ))}
      </div>
    </div>
  );
}

export default SelectTime;
