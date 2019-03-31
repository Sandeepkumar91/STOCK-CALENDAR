import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dates from '../dates.js';
import { connect } from 'react-redux';

var dateFormat = require('dateformat');


moment.locale('en-GB');
const localizer = BigCalendar.momentLocalizer(moment)

class Calendar extends Component {

  handleSelect = ({ start, end }) => {
    const title = window.prompt('Add Stock Price')
    var newStock = {
        date: dateFormat(start, "yyyy-mm-dd"),
        stock_price: title
    }
  }

  render() {

    var events = []

    const { stockList } = this.props;
    if (stockList != null) {
       debugger
        var events = stockList.map((currElement, index) => {
            let eventObj = Object()
            eventObj.id = index
            eventObj.title = "Rs. " + currElement['stock_price']
            eventObj.start = Date.parse(currElement['date'], "YYYY-MM-DD")
            eventObj.end = Date.parse(currElement['date'], "YYYY-MM-DD")

            return eventObj
        });
    }
    

    debugger

    return (
      <div className="calendar">
         <div style={{ height: 550 }}>
            <BigCalendar
              selectable
              events={events}
              localizer={localizer}
              dates={new Date(2019, 2 ,1)}
              onSelectSlot={this.handleSelect}
            />
          </div>
      </div>
    );
  }
}
 const mapStateToProps = (state) => {
        
        return {
          stockList: state.data.stockApiResponse,
        }
    }

export default connect(mapStateToProps , null)(Calendar);