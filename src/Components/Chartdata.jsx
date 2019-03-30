import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'


const options = {
  title: {
    text: 'Chart Data'
  },
  series: [{
    data: [3, 2, 1]
  }]
}

class Chartdata extends Component {
    render() {
        return (
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            </div>
        );
    }
}

export default Chartdata;