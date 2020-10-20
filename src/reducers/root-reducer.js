import { combineReducers } from 'redux';

import newBookingReducer from './new-booking-reducer';

const rootReducer = combineReducers({
  newBookings: newBookingReducer,
});

export default rootReducer;
