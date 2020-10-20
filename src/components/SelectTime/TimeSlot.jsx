import React from 'react';
import './SelectTime.scoped.scss';

function TimeSlot(props) {
  const {
    value,
  } = props;

  return (
    <div className="time-slot">
      {value}
    </div>
  );
}

export default TimeSlot;
