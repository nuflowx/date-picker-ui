import React from 'react';

import Dropdown from '../Dropdown';

function DateSelect() {
  const options = [{ // change this to date-values
    value: '',
  }, {
    value: 1,
  }, {
    value: 2,
  }];

  return (
    <div>
      Select Date&nbsp;
      <Dropdown
        options={options}
      />
    </div>
  );
}

export default DateSelect;
