import React from 'react';
import createBemClass from 'react-bem-builder';

import './SelectTime.scoped.scss';

const cn = createBemClass('time-slot');

function TimeSlot(props) {
  const {
    onClick = () => {},
    disabled,
    value,
    selected,
  } = props;

  if (disabled) {
    return (
      <div className={cn('', { disabled })}>
        {value}
      </div>
    );
  }

  return (
    <button type="button" className={cn('', { selected })} onClick={() => onClick(value)}>
      {value}
    </button>
  );
}

export default TimeSlot;
