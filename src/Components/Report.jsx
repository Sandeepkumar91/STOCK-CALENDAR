import React, { Component } from 'react';
import Chartdata from './Chartdata';
import Profit from './Profit';
import Deal from './Deal'


class Report extends Component {
    render() {
        return (
            <div className="report">
                <Profit />
                <Chartdata />
                <Deal />
            </div>
        );
    }
}

export default Report;