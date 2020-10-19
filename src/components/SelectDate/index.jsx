import React from 'react';
import dayjs from 'dayjs';

import Dropdown from '../Dropdown';

function DateSelect() { // change this to scrollable buttons instead of select-dropdown?
  const options = [{
    value: '',
  }];

  let n = 0;
  while (n <= 28) {
    const day = dayjs().add(n, 'day');
    day.add(n, 'day');
    options.push({
      value: day.format('YYYY-MM-DD'),
      label: day.format('D ddd MMM'),
      selected: day.isSame(dayjs(), 'day'),
    });
    n += 1;
  }

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
