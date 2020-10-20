import { combineReducers } from 'redux';

import newBookingReducer from './new-booking-reducer';

const rootReducer = combineReducers({
  newBooking: newBookingReducer,
});

export default rootReducer;
