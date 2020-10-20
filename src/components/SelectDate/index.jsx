import React from 'react';
import { connect } from 'react-redux';

import Dropdown from '../Dropdown';
import { SET_DATE } from '../../actions/types/new-booking-action-types';
import getDayOptions from '../../utilities/dropdown-utility'; // TODO: add aliases to not need relative paths

function DateSelect({ dispatch }) { // change this to scrollable buttons instead of select-dropdown?
  const options = getDayOptions(24);

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
