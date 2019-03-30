import React, { Component } from 'react';
import Calendar from './Calendar';
import Report from './Report';

class Dashboard extends Component {
    render() {
        return (
             <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <Calendar />
                    </div>
                    <div className="col-md-4">
                        <Report />
                    </div> 
                </div>
            </div>
        );
    }
}

export default Dashboard;