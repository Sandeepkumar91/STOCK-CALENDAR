import React, { Component } from 'react';

class Deal extends Component {
    render() {
        return (
            <div className='deal'>
                <div className="buy">
                <h4><u>13th April</u></h4>
                <h5>Buy Date</h5>
                </div>
               <div className='sell'>
                <h4><u>17th April</u></h4>
                <h5>Sell Date</h5>
                </div>
            </div>
        );
    }
}

export default Deal;