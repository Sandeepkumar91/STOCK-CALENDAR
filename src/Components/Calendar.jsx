import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import events from '../events.js';
import dates from '../dates.js';


moment.locale('en-GB');
const localizer = BigCalendar.momentLocalizer(moment)

class Calendar extends Component {
  render() {
    return (
      <div className="App">
         <div style={{ height: 700 }}>
            <BigCalendar
              events={events}
              localizer={localizer}
              date={new Date(2015, 4, 0)}
            />
          </div>
      </div>
    );
  }
}

export default Calendar;