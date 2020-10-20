import React from 'react';
import { connect } from 'react-redux';
import dayjs from 'dayjs';

import { SET_DATE } from '../../actions/types/new-booking-action-types';
import Dropdown from '../Dropdown';

function DateSelect({ dispatch }) { // change this to scrollable buttons instead of select-dropdown?
  const options = [];

  let n = 0;
  while (n < 28) { // 4 weeks
    const day = dayjs().add(n, 'day');
    options.push({
      value: day.format('YYYY-MM-DD'),
      label: day.format('D ddd MMM'),
      selected: day.isSame(dayjs(), 'day'),
    });
    n += 1;
  }

  const onChange = (date) => {
    dispatch({ type: SET_DATE, payload: { date } });
  };

  return (
    <div>
      Select Date&nbsp;
      <Dropdown
        onChange={onChange}
        options={options}
      />
    </div>
  );
}

export default connect()(DateSelect);
