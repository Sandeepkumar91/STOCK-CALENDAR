import React, { Component } from 'react';

class Deal extends Component {
    render() {
        return (
            <div className='deal'>
               <h4><u>Buy Date</u></h4>
               <span>13th April</span>
               <h4><u>Sell Date</u></h4>
               <span>17th April</span>
            </div>
        );
    }
}

export default Deal;