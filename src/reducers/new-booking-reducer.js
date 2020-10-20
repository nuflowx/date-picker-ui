import {
  RESET_BOOKING,
  SET_DATE,
  SET_TIME,
} from '../actions/types/new-booking-action-types';

const initialState = {
  timeSlot: null,
  date: null,
};

function updateNewBookingDate(state, { date }) {
  return {
    ...state,
    date,
  };
}

function updateNewBookingTime(state, { time }) {
  return {
    ...state,
    time,
  };
}

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case SET_DATE:
      return updateNewBookingDate(state, payload);
    case SET_TIME:
      return updateNewBookingTime(state, payload);
    case RESET_BOOKING:
      return initialState;
    default:
      return state;
  }
};
