import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { connect } from 'react-redux';

var dateFormat = require('dateformat');


class Chartdata extends Component {
    render() {
      debugger
       console.log(this.props);


    let stockdata = this.props.stockData
    var options = {}
    
      if (stockdata != null) {
        let stockApiWIthDateClass = stockdata.map((currElement) => {
            let parsedDate = Date.parse(currElement.date, "YYYY-MM-DD")
            return {date: parsedDate, stock_price: currElement.stock_price}
        })

        let sortedStockData = stockApiWIthDateClass.sort((a, b) => {
           return a.date - b.date
        })

        let dates = sortedStockData.map((currElement) => {
            let dateStr = dateFormat(currElement.date, "mmm dd");
            return dateStr
        })
        let prices = sortedStockData.map((currElement) => {
            return currElement.stock_price
        })


      options = {
          title: {
            text: 'Chart Data'
          },
          xAxis: {
            categories: dates
          },
          yAxis: {
            title: ""
          },
          series: [{
            name: 'Stock Price',
            data: prices
          }],
          legend: {
            enabled: false,
          },
          credits: {
            enabled: false
          }
      }
    }
      
      return (
          <div className='chart'>
             {stockdata != null &&
                <HighchartsReact
                  highcharts={Highcharts}
                  options={options}
              />
             }
          </div>
      );
    }
}

const mapStateToProps = (state) => {
        
        return {
          stockData: state.data.stockApiResponse,
          eventAddedCount: state.data.stockApiResponseChangeCount
        }
    } 

export default connect(mapStateToProps , null)(Chartdata);