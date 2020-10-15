import React from 'react';
import { render } from 'react-dom';

function Application(props) {
  return (
    <div>
      <h1>Welcome to date-picker-UI!</h1>
      <div>
        Select a date and time for your booking!
      </div>
    </div>
  );
}

render(<Application />, document.getElementById('app'));
