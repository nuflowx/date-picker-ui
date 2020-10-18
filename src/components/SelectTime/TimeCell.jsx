import React from 'react';
import './TimeSelect.scoped.scss';

function TimeCell(props) {
  const {
    value,
  } = props;

  return (
    <div className="time-cell">
      {value}
    </div>
  );
}

export default TimeCell;
