const initialState = {
  timeSlot: null,
  date: null,
};

function updateNewBookingDate(state, payload) {
  return {
    ...state,
    newBookings: {
      date: payload,
    },
  };
}

function updateNewBookingTime(state, payload) {
  return {
    ...state,
    newBookings: {
      date: payload,
    },
  };
}

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case 'NewBookingAction.UPDATE_NEW_BOOKING_DATE':
      return updateNewBookingDate(state, payload);
    case 'NewBookingAction.UPDATE_NEW_BOOKING_TIME':
      return updateNewBookingTime(state, payload);
    case 'NewBookingAction.RESET_NEW_BOOKING':
      return initialState;
    default:
      return state;
  }
};
