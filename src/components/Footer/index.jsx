import React from 'react';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import './Footer.scoped.scss';

// to parse string with known format
// https://day.js.org/docs/en/parse/string-format
dayjs.extend(customParseFormat);

function Footer({ date, time }) {
  // convert to datetime, add minutes, format for display XD
  const bookingEnd = dayjs(time, 'H:mm').add(50, 'minute').format('H:mm');
  const displayDate = dayjs(date, 'YYYY-MM-DD').format('ddd, D MMM');

  return (
    <footer>
      {!(date && time)
        && <div>Please select a date & time for your booking</div> }

      {(date && time) && (
        <div>
          {displayDate}
          <br />
          <div className="booking-time">{`${time} - ${bookingEnd}`}</div>
        </div>
      )}
      <button type="submit" disabled={!(date && time)}>
        Next
      </button>
    </footer>
  );
}

const mapStateToProps = (state) => ({
  date: state.newBooking.date,
  time: state.newBooking.time,
});

export default connect(mapStateToProps)(Footer);
