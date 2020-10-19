import React from 'react';
import './SelectTime.scoped.scss';

function Cell(props) {
  const {
    value,
  } = props;

  return (
    <div className="time-cell">
      {value}
    </div>
  );
}

export default Cell;
