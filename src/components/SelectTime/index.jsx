import React from 'react';
import dayjs from 'dayjs';

import ItemTime from './ItemTime';
import './SelectTime.scoped.scss';

function SelectTime() {
  // move these to factories or utilities, plus regard the current selected date
  const morningSlots = [];
  let m = 0;

  while (m < 24) {
    const day = dayjs().hour(6).minute(m * 15);
    morningSlots.push({
      value: day.format('H:mm'),
      label: day.format('H:mm'),
    });
    m += 1;
  }

  const afternoonSlots = [];
  let a = 0;

  while (a < 20) {
    const day = dayjs().hour(12).minute(a * 15);
    afternoonSlots.push({
      value: day.format('H:mm'),
      label: day.format('H:mm'),
    });
    a += 1;
  }

  const eveningSlots = [];
  let e = 0;

  while (e < 20) {
    const day = dayjs().hour(17).minute(e * 15);
    eveningSlots.push({
      value: day.format('H:mm'),
      label: day.format('H:mm'),
      selected: day.isSame(dayjs(), 'day'),
    });
    e += 1;
  }

  return (
    <div className="select-time__container">
      <div className="select-time__daytime-header">Morning</div>
      <div className="select-time__grid">
        {morningSlots.map((slot) => (
          <ItemTime value={slot.value} key={slot.value} />
        ))}
      </div>
      <div className="select-time__daytime-header">Afternoon</div>
      <div className="select-time__grid">
        {afternoonSlots.map((slot) => (
          <ItemTime value={slot.value} key={slot.value} />
        ))}
      </div>
      <div className="select-time__daytime-header">Evening</div>
      <div className="select-time__grid">
        {eveningSlots.map((slot) => (
          <ItemTime value={slot.value} key={slot.value} />
        ))}
      </div>
    </div>
  );
}

export default SelectTime;
