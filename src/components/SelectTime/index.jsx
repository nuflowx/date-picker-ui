import React from 'react';

import TimeCell from './TimeCell';

function TimeSelect() {
  return (
    <div>
      <TimeCell value="20:45" />
      <TimeCell value="21:00" />
      <TimeCell value="21:15" />
      <TimeCell value="21:30" />
      <TimeCell value="21:45" />
    </div>
  );
}

export default TimeSelect;
