import NewBookingActionTypes from './types/new-booking-action-types';

/*
 * action creators
 */
export function resetBooking() {
  return {
    type: NewBookingActionTypes.RESET_BOOKING,
    payload: null,
  };
}

export function setDate(date) {
  return {
    type: NewBookingActionTypes.SET_DATE,
    payload: { date },
  };
}

export function setTime(time) {
  return {
    type: NewBookingActionTypes.SET_TIME,
    payload: { time },
  };
}
