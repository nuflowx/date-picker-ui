/* eslint-disable no-underscore-dangle */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers/root-reducer';
import './assets/styles.scss';

import AppContainer from './components/AppContainer';
import Footer from './components/Footer';
import Header from './components/Header';
import SelectDate from './components/SelectDate';
import SelectTime from './components/SelectTime';

function Application() {
  return (
    <div>
      <h1>Welcome to date-picker-UI.</h1>
      <p>
        Select a date and time for your booking!
      </p>
      <AppContainer>
        <Header />
        <SelectDate />
        <SelectTime />
        <Footer />
      </AppContainer>
    </div>
  );
}

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // redux-devtools
);

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('app'),
);
