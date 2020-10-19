import React from 'react';

import Cell from './Cell';
import './SelectTime.scoped.scss';

function SelectTime() {
  return (
    <div className="select-time-container">
      <Cell value="20:45" />
      <Cell value="21:00" />
      <Cell value="21:15" />
      <Cell value="21:30" />
      <Cell value="21:45" />
    </div>
  );
}

export default SelectTime;
