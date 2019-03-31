import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { connect } from 'react-redux';

var dateFormat = require('dateformat');


class Chartdata extends Component {
    render() {
       console.log(this.props);


    let stockdata = this.props.stockData
    var options = {}
    debugger
      if (stockdata != null) {
        let dates = stockdata.map((currElement) => {
            let date = Date.parse(currElement.date, "YYYY-MM-DD")
            let dateStr = dateFormat(date, "mmm dd");
            return dateStr
        })
        let prices = stockdata.map((currElement) => {
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
        }
    } 

export default connect(mapStateToProps , null)(Chartdata);