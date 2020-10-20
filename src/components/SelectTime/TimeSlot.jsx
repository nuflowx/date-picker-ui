import React from 'react';
import createBemClass from 'react-bem-builder';

import './SelectTime.scoped.scss';

const cn = createBemClass('time-slot');

function TimeSlot(props) {
  const {
    onClick = () => {},
    value,
    selected,
  } = props;

  return (
    <button type="button" className={cn('', { selected })} onClick={() => onClick(value)}>
      {value}
    </button>
  );
}

export default TimeSlot;
