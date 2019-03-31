import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dates from '../dates.js';
import { connect } from 'react-redux';
import {addNewObject, addedOrRemovedEvent} from '../Actions/Actions'

var dateFormat = require('dateformat');


moment.locale('en-GB');
const localizer = BigCalendar.momentLocalizer(moment)

class Calendar extends Component {

  handleSelect = ({ start, end }) => {
    const title = window.prompt('Add Stock Price')
    var newStock = {
        date: dateFormat(start, "yyyy-mm-dd"),
        stock_price: Number(title)
    }
    this.props.addNewObject(newStock);
    this.props.eventAddedOrModified();
  }

  render() {
    debugger
    var events = []

    const { stockList } = this.props;

    if (stockList != null) {
         events = stockList.map((currElement, index) => {
            let eventObj = Object()
            eventObj.id = index
            eventObj.title = "Rs. " + currElement['stock_price']
            eventObj.start = Date.parse(currElement['date'], "YYYY-MM-DD")
            eventObj.end = Date.parse(currElement['date'], "YYYY-MM-DD")

            return eventObj
        });
    }

    return (
      <div className="calendar">
         <div style={{ height: 550 }}>
            <BigCalendar
              selectable
              events={events}
              localizer={localizer}
              defaultDate={new Date(2019, 3, 0)}
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
          eventAddedCount: state.data.stockApiResponseChangeCount
        }
  }
  
  const mapDispatchToProps = (dispatch) => {
        return {
          addNewObject: (newStock) => {
              dispatch(addNewObject(newStock))
          },
          eventAddedOrModified: () => {
              dispatch(addedOrRemovedEvent())
          }
        }
  }

export default connect(mapStateToProps , mapDispatchToProps)(Calendar);